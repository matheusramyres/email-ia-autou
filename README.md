# 📧 Email AI Classifier – AutoU Challenge

Aplicação web que utiliza Inteligência Artificial para **classificar emails automaticamente** e **sugerir respostas adequadas**, reduzindo o trabalho manual de equipes que lidam com grande volume de mensagens.

Projeto desenvolvido como parte do **desafio técnico da AutoU**.

---

## 📑 Funcionalidades

- Upload de emails em formato `.txt` ou `.pdf`
- Inserção direta de texto do email
- Classificação automática do email em categorias:
  - Suporte
  - Reclamação
  - Parceria
  - Vendas
  - Cobrança
  - Spam
- Classificação final como:
  - **Produtivo**
  - **Improdutivo**
- Sugestão de resposta automática baseada na categoria
- Exibição do nível de confiança da IA

---

## 🚀 Tecnologias utilizadas

- ⚛️ **React 19**
- ⚡ **Vite**
- 🧠 **TypeScript**
- 📱 **Ionic React**
- 🎨 **Tailwind CSS**
- 🌐 **Axios**
- 🔔 **React Toastify**
- 🧩 **Ionicons**
- 🧼 **ESLint**

---

## 📦 Pré-requisitos

Antes de começar, você precisa ter instalado:

- **Node.js** (recomendado: versão LTS)
- **yarn** ou **npm**

---

## 🧩 Variáveis de ambiente

Dentro do arquivo **.env.example** na raiz do projeto preenchas as variaveis ante antes de rodar o projeto.

```bash
API_KEY=
BASE_URL=
```

- **API_KEY:** autorização para acessar a API externa.
- **BASE_URL:** base URL da api externa

## ▶️ Como rodar o projeto

Clone o repositório e dentro da pasta do projeto execute os comandos abaicxo para instalar as dependências:

```bash
yarn install
yarn dev
```

A aplicação estará disponível em:

```bash
http://localhost:5173
```

---

## ⚙️ Build para produção

```bash
yarn build
```

Pré-visualizar o build:

```bash
yarn preview
```

### 🧹 Lint

```bash
yarn lint
```

---

## 🔗 Link de produção

- Produção: [Link](https://email-ia.netlify.app/)

---

## 🔗 Link da api (produção e Github)

- **Produção:** [Link](https://backend-ia-email.onrender.com/)
- **Github:** [Link](https://github.com/matheusramyres/backend-ia-email)

---

## 👨‍💻 Autor

### Matheus Ramyres da Silva Braz

Desenvolvedor Full Stack
