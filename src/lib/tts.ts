export const speak = (text: string, voiceName?: string) => {
    if (typeof window !== 'undefined' && window.speechSynthesis) {
        // Cancelar cualquier discurso previo
        window.speechSynthesis.cancel();

        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = 'es-PE';
        utterance.rate = 0.9;
        utterance.pitch = 1;

        const synth = window.speechSynthesis;

        const setVoice = () => {
            const voices = synth.getVoices();

            // Si no hay voces aún, esperar al evento (algunos navegadores cargan asíncronamente)
            if (voices.length === 0) {
                return;
            }

            console.log("Voces disponibles:", voices.map(v => v.name));

            let selectedVoice = null;

            if (voiceName) {
                console.log("Buscando voz específica:", voiceName);

                // 1. Coincidencia Exacta (Máxima prioridad)
                selectedVoice = voices.find(v => v.name === voiceName);

                if (!selectedVoice) {
                    // 2. Extractor de Nombre Inteligente (Mejorado)
                    // Eliminamos sufijos comunes que ensucian la búsqueda
                    const cleanVoiceName = voiceName.replace(/(Neural|Natural|Online|Local|Desktop|Voz|Microsoft|Google|Spanish|Mexico|Peru|Spain|Chile)/gi, '').replace(/[-_]/g, ' ').trim();
                    const nameParts = cleanVoiceName.split(/\s+/).filter(p => p.length > 2);
                    const coreName = nameParts[0] || voiceName;

                    console.log("Buscando por nombre núcleo:", coreName, "(Original:", voiceName, ")");

                    selectedVoice = voices.find(v => {
                        const vName = v.name.toLowerCase();
                        const target = coreName.toLowerCase();
                        return vName.includes(target);
                    });
                }
            }

            // Fallbacks de idioma
            const spanishVoice = selectedVoice ||
                voices.find(v => v.lang === 'es-PE') ||
                voices.find(v => v.lang.includes('es-PE')) ||
                voices.find(v => v.lang.includes('es'));

            if (spanishVoice) {
                console.log("Voz final seleccionada:", spanishVoice.name, "(Lang:", spanishVoice.lang, ")");
                utterance.voice = spanishVoice;
                utterance.lang = spanishVoice.lang;
            }

            synth.speak(utterance);
        };

        if (synth.getVoices().length > 0) {
            setVoice();
        } else {
            synth.onvoiceschanged = setVoice;
        }
    }
};
