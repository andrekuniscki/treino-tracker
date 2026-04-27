# TreinoTracker

Aplicativo mobile para rastreamento de exercícios e treinos, desenvolvido com React Native + Expo.

## Funcionalidades

- Navegação entre telas com React Navigation
- Lista otimizada de exercícios com FlatList
- Detalhes de exercícios com GIFs animados
- Perfil do usuário com metas e progresso
- Interface responsiva e intuitiva

## Tecnologias

- Expo SDK 55
- React Native
- React Navigation (Stack Navigator)
- JavaScript
- Lucide React Native

## Instalação

```bash
npm install
```

## Execução

```bash
npx expo start
```

Escaneie o QR code com o Expo Go no seu dispositivo móvel.

## Estrutura do Projeto

```
/
├── App.js                    # Arquivo principal com navegação
├── screens/
│   ├── HomeScreen.js         # Tela inicial com categorias
│   ├── ListScreen.js         # Listagem de exercícios
│   ├── DetailScreen.js       # Detalhes do exercício
│   └── ProfileScreen.js      # Perfil do usuário
├── components/
│   ├── Cards.js      # Card de exercício reutilizável
│   ├── Button.js             # Componente botão
│   └── external-link.js      # Link externo
├── constants/
│   └── theme.js              # Constantes de tema
├── data/
│   ├── mockExercises.js      # Dados mockados de exercícios
│   └── exercises.js          # Dados de exercícios
├── hooks/
│   ├── use-color-scheme.js   # Hook para esquema de cores
│   └── use-theme.js          # Hook para tema
└── assets/
    └── images/               # Imagens e ícones do app
```



## Paleta de Cores

- Fundo: `#f5f5f5`
- Botões: `#da291c`
- Texto: `#323131`

## Autor

André Kuniscki Monteiro de Albuquerque Júnior - Matrícula: 01406148

