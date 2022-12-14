export default {
    title: 'PCSX2 - Midnight Club 3',
    description: 'Configurações do emulador PCSX2 para o jogo Midnight Club 3.',
    themeConfig: {
        sidebar: [
            {
                text: 'Guia',
                collapsible: true,
                items: [
                    { text: 'Ferramentas', link: '/tools/' },
                    { text: 'Arquivos', link: '/files/' },
                    { text: 'Configuração', link: '/settings/' },
                ]
            },
            {
                text: 'Opcionais',
                collapsible: true,
                items: [
                    { text: 'Reshade', link: '/reshade/' },
                ]
            },
        ],
    },
    outDir: '../dist'
}