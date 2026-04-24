# TreinoTracker

Aplicativo mobile para rastreamento de exercícios e treinos, desenvolvido com React Native + Expo.

## Funcionalidades

- Navegação entre telas com expo-router
- Lista otimizada de exercícios com FlatList
- Histórico de treinos com cards visuais
- Perfil do usuário com metas e progresso
- Detalhes de exercícios com GIFs animados

## Tecnologias

- Expo
- React Native
- Expo Router
- TypeScript
- Lucide React Native

## Instalação

```bash
npm install
```

## Execução

```bash
npx expo start
```

## Estrutura do Projeto

```
src/
├── app/
│   ├── _layout.tsx          # Layout principal com Stack Navigator
│   ├── (tabs)/
│   │   ├── _layout.tsx      # Tab Navigator com 4 abas
│   │   ├── index.tsx        # Tela Inicial
│   │   ├── exercises.tsx    # Listagem de exercícios
│   │   ├── history.tsx      # Histórico de treinos
│   │   └── profile.tsx      # Perfil do usuário
│   └── exercise/
│       └── [id].tsx         # Detalhes do exercício
├── components/
│   ├── exercise-card.tsx    # Card de exercício
│   └── history-card.tsx     # Card de histórico
├── constants/
│   └── theme.ts             # Configurações de tema
├── data/
│   └── mockExercises.ts     # Dados dos exercícios
└── hooks/
    └── use-color-scheme.ts  # Hook para tema

assets/
└── images/                  # GIFs dos exercícios e ícone
```

## Paleta de Cores

- Fundo: `#f5f5f5`
- Botões: `#da291c`
- Texto: `#323131`

## Autor

André Kuniscki Monteiro de Albuquerque Júnior - Matrícula: 01406148
