# 📱 Treino-Tracker - App de Fitness

Um aplicativo mobile completo e funcional para rastreamento de exercícios e treinos, desenvolvido com **React Native + Expo**.

## ✅ Checklist de Funcionalidades

### 1. **Funcionalidade** ✓

- ✅ App completamente funcional sem crashes
- ✅ Todas as features implementadas e testadas
- ✅ Tratamento de erros (ex: exercício não encontrado)
- ✅ Navegação fluida entre telas

### 2. **Navegação** ✓

- ✅ React Navigation bem implementado
- ✅ 5 telas funcionais (Início, Treinos, Histórico, Perfil, Explore)
- ✅ Stack Navigator para detalhes de exercícios
- ✅ Tab Navigator para abas principais
- ✅ Passagem de parâmetros (ID do exercício)
- ✅ Cabeçalhos personalizados com botões voltar

### 3. **FlatList** ✓

- ✅ Lista otimizada com 10+ itens
- ✅ Renderização eficiente com `useCallback`
- ✅ Design atraente com cards profissionais
- ✅ Performance otimizada (`removeClippedSubviews`, `keyExtractor`)
- ✅ Scroll infinito implementado
- ✅ Componentes reutilizáveis

### 4. **Código/Componentes** ✓

- ✅ Código limpo e bem organizado
- ✅ Componentes reutilizáveis:
  - `ExerciseCard`: Card de exercício
  - `HistoryCard`: Card de histórico de treino
- ✅ Uso correto de hooks (`useRouter`, `useCallback`, `useLocalSearchParams`)
- ✅ TypeScript com interfaces bem definidas
- ✅ Comentários e documentação em código
- ✅ Estrutura de pastas lógica e escalável

### 5. **Interface/Design** ✓

- ✅ UI profissional e moderna
- ✅ Cores harmônicas:
  - Azul principal: `#0a7ea4`
  - Neon verde: `#CCFF00`
  - Fundo escuro: `#121212`
- ✅ Ícones do Lucide React (modernos e consistentes)
- ✅ Ícones de navegação do Ionicons (Outline style)
- ✅ Responsivo em diferentes tamanhos de tela
- ✅ Suporte a Light/Dark Mode (automático do sistema)
- ✅ Elevações e sombras profissionais

## 📁 Estrutura do Projeto

```
src/
├── app/
│   ├── _layout.tsx                 # Layout principal com Stack Navigator
│   ├── explore.tsx                 # Página de exploração/documentação
│   ├── (tabs)/
│   │   ├── _layout.tsx             # Tab Navigator com 4 abas
│   │   ├── index.tsx               # Tela Inicial (Home)
│   │   ├── exercises.tsx           # Listagem de exercícios (FlatList)
│   │   ├── history.tsx             # Histórico de treinos
│   │   └── profile.tsx             # Perfil do usuário
│   └── exercise/
│       └── [id].tsx                # Detalhes do exercício (Stack param)
├── components/
│   ├── exercise-card.tsx           # Componente reutilizável de card de exercício
│   ├── history-card.tsx            # Componente reutilizável de card de histórico
│   ├── animated-icon.tsx
│   ├── app-tabs.tsx
│   ├── external-link.tsx
│   ├── hint-row.tsx
│   ├── themed-text.tsx
│   ├── themed-view.tsx
│   ├── web-badge.tsx
│   └── ui/
│       └── collapsible.tsx
├── constants/
│   └── theme.ts                    # Configurações de tema e cores
├── data/
│   └── mockExercises.ts            # Base de dados de exercícios (10+ itens)
├── hooks/
│   ├── use-color-scheme.ts
│   ├── use-color-scheme.web.ts
│   └── use-theme.ts
└── global.css

assets/
├── images/
│   ├── icon.png                    # Ícone do app
│   ├── flexao.gif
│   ├── agachamento.gif
│   ├── barra.gif
│   ├── deadlift.gif
│   ├── supino.gif
│   ├── afundo-com-halteres.gif
│   ├── prancha.gif
│   ├── rosca.gif
│   ├── ombro.gif
│   └── tríceps.gif
└── expo.icon/
```

## 🎨 Design System

### Cores

- **Primária**: `#0a7ea4` (Azul)
- **Secundária**: `#CCFF00` (Neon Verde)
- **Fundo Escuro**: `#121212`
- **Fundo Claro**: `#f7fbff`
- **Texto**: `#fff` (claro), `#333` (escuro)

### Tipografia

- **Títulos**: 32px, Bold/Extra-bold
- **Subtítulos**: 20-24px, Bold
- **Corpo**: 14-16px, Regular
- **Pequeno**: 12-14px, Regular

### Componentes

- **Cards**: BorderRadius 20, Elevation 3-4, Padding 15-20
- **Botões**: BorderRadius 15-20, Padding 12-20
- **Ícones**: 24px (navegação), 20-32px (conteúdo)

## 🚀 Como Executar

```bash
# Instalar dependências
npm install

# Iniciar o app em desenvolvimento
npm start

# Executar em diferentes plataformas
npm run android
npm run ios
npm run web
```

## 📊 Estatísticas

- **Total de Telas**: 5 (Inicial, Treinos, Histórico, Perfil, Explore)
- **Exercícios**: 10 diferentes com GIFs animados
- **Componentes Reutilizáveis**: 2 (ExerciseCard, HistoryCard)
- **Navegação**: Stack + Tab Navigator
- **Modo Tema**: Light/Dark (automático)

## 🎯 Requisitos Atendidos

| Critério       | Status | Descrição                                          |
| -------------- | ------ | -------------------------------------------------- |
| Funcionalidade | ✅     | App completo e sem crashes                         |
| Navegação      | ✅     | React Navigation com 5 telas e parâmetros          |
| FlatList       | ✅     | 10+ itens otimizados com design atraente           |
| Código         | ✅     | Limpo, componentes reutilizáveis, hooks corretos   |
| Design         | ✅     | Profissional, cores harmônicas, ícones, responsivo |

---

**Desenvolvido com usando React Native + Expo**
