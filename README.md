# 🍔 Neon Burger — Landing Page + Pesquisa de Satisfação

Este projeto é uma **landing page completa de hamburgueria premium** com visual futurista/neon, incluindo **seções de marketing, catálogo e uma pesquisa interativa pós-compra**.

Tudo foi construído com **HTML, CSS puro e JavaScript vanilla**, sem frameworks.

---

## 🚀 Visão Geral

A página apresenta:

* Layout moderno com estética **cyberpunk/neon**
* Estrutura de **e-commerce (vitrine de produtos)**
* **Promoções e destaque de produto**
* **Depoimentos e prova social**
* **Pesquisa de satisfação (NPS + UX)**
* Responsividade para mobile

---

## 🧱 Estrutura do Projeto

```
index.html
 ├── <head>
 │   ├── Fonts (Google Fonts)
 │   └── CSS (estilização completa)
 │
 ├── <body>
 │   ├── Navbar
 │   ├── Hero Section
 │   ├── Ticker de Promoções
 │   ├── Promo Cards
 │   ├── Destaque (produto premium)
 │   ├── Categorias
 │   ├── Trust (benefícios)
 │   ├── Reviews
 │   ├── CTA final
 │   ├── Pesquisa (Survey)
 │   └── Footer
 │
 └── <script>
     └── Lógica da pesquisa interativa
```

---

## 🎨 Design e Estilo

### 🔹 Tema Visual

* Estilo **neon futurista**
* Cores principais:

  * Rosa neon (`--neon-pink`)
  * Ciano (`--neon-cyan`)
  * Amarelo (`--neon-yellow`)
  * Verde (`--neon-green`)
  * Roxo (`--neon-purple`)

### 🔹 Efeitos

* `text-shadow` para brilho neon
* `box-shadow` para iluminação
* `clip-path` para cortes futuristas
* Animações:

  * `float` (imagem do burger)
  * `pulse` (badge)
  * `ticker` (promoções)
  * `fadeSlide` (survey)

---

## 📱 Responsividade

O layout se adapta automaticamente via `@media (max-width: 900px)`:

* Hero vira coluna única
* Imagens ocultadas para performance
* Grids viram 1 ou 2 colunas
* Navbar simplificada

---

## 🍔 Seções Principais

### 1. Navbar

* Logo estilizada
* Links de navegação
* Botão CTA “Pedir Agora”

---

### 2. Hero Section

* Headline impactante
* Botões de ação
* Estatísticas (prova social)
* Imagem com animação

---

### 3. Promo Ticker

Barra animada com ofertas:

* Frete grátis
* Combos
* Descontos

---

### 4. Promoções

Cards com:

* Imagem
* Nome
* Descrição
* Preço antigo/novo
* Botão de ação

---

### 5. Destaque (Black Edition)

Produto premium com:

* Especificações técnicas
* Preço destacado
* Visual mais sofisticado

---

### 6. Categorias

Grid com:

* Burgers
* Combos
* Bebidas
* Sobremesas

---

### 7. Trust (Confiança)

Itens que aumentam conversão:

* Entrega rápida
* Garantia
* Ingredientes frescos
* Programa de fidelidade

---

### 8. Reviews

Depoimentos com:

* Estrelas
* Texto
* Autor + localização

---

### 9. CTA Final

Chamada forte para conversão:

* Texto grande
* Botão de ação

---

## 🧠 Pesquisa de Satisfação (Survey)

### 📊 Estrutura

7 perguntas:

1. **NPS (0–10)**
2. Facilidade de uso
3. Confiança no site
4. Influência do design
5. Motivo da compra (multi escolha)
6. Fricção na jornada
7. Comentário aberto

---

### ⚙️ Lógica JavaScript

#### Estado global:

```js
let current = 1;
const answers = {};
```

---

### 🔄 Navegação

#### `updateUI()`

* Atualiza:

  * Pergunta atual
  * Barra de progresso
  * Botões (voltar/próxima)

---

#### `nextQuestion()`

* Avança pergunta
* Se for a última → envia

---

#### `prevQuestion()`

* Volta pergunta

---

### 🧩 Respostas

#### NPS:

```js
selectNPS(btn, val)
```

#### Escolha única:

```js
selectChoice(btn)
```

#### Múltipla escolha (limite 2):

```js
selectMulti(btn, group)
```

---

### 📤 Envio

```js
submitSurvey()
```

* Esconde formulário
* Mostra tela de agradecimento
* Loga respostas no console

---

### 🎁 Cupom

#### Código:

```js
copyCoupon()
```

* Copia para clipboard
* Feedback visual “✓ COPIADO”

---

## 💡 Destaques Técnicos

* Zero dependências externas (exceto fontes)
* UX focada em conversão
* Pesquisa integrada (coleta de feedback)
* Código organizado por seções
* Uso eficiente de CSS moderno

---

## 📈 Possíveis Melhorias

* Integração com backend (salvar respostas)
* Integração com API de pedidos
* Análise de métricas (Google Analytics)
* Dark/light mode toggle
* Componentização (React/Vue)

---

## 🛠️ Como Usar

1. Salve como `index.html`
2. Abra no navegador
3. Pronto 🚀

---

## 📌 Conclusão

Este projeto é uma **landing page completa de alta conversão**, combinando:

* Design impactante
* UX bem estruturada
* Elementos de marketing
* Coleta de feedback do usuário

Ideal para:

* Restaurantes
* E-commerce
* MVPs de produtos digitais
