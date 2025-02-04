
# Shop.co E-commerce

Este projeto tem como objetivo criar a homepage de um protótipo desenvolvido no Figma, utilizando HTML, CSS e um pouco de TypeScript. A estrutura inicial foi pensada para ser simples, mas com uma base sólida que permitirá a expansão para outras páginas no futuro, como a página de detalhes de um produto, página de categoria e um carrinho de compras.

## Tecnologias Utilizadas

- **HTML**: Estruturação da página e conteúdo semântico.
- **CSS**: Estilos responsivos.
- **TypeScript**: Válidação e componentização.
- **Figma**: Protótipo visual da homepage e páginas adicionais.

## Funcionalidades

### Página Principal (Homepage)
- Layout adaptativo (responsivo) para diferentes tamanhos de tela.
- Campo de preenchimento de Newsletter com validação de e-mail
- Menu de navegação funcional.
- Integração de elementos interativos (botões, links, etc.).

### Possíveis Expansões:
- **Página de Detalhes do Produto**: Página individual para exibição detalhada de um produto, com informações como descrição, preço, cores do produto, avaliações e botões para adicionar ao carrinho.
- **Página de Categoria**: Apresentação de uma lista de produtos por categoria, permitindo ao usuário navegar facilmente entre as opções.
- **Carrinho de Compras**: Implementação de um carrinho de compras simples, com funcionalidades de adicionar, remover, visualizar produtos e adicionar cupons de desconto.

## Como Executar o Projeto

Siga os passos abaixo para rodar o projeto localmente no seu ambiente:

### 1. Clone o Repositório

Primeiramente, faça o clone do repositório para o seu computador utilizando o comando abaixo. Isso irá baixar todos os arquivos necessários para o seu ambiente local.

```bash
git clone https://github.com/Kaiquemarques00/Shop.co-E-commerce.git
```

### 2. Navegue até o Diretório do Projeto

Após clonar o repositório, entre na pasta do projeto:

```bash
cd Shop.co-E-commerce
```

### 3. Abra o Arquivo index.html

A página inicial do projeto está localizada no arquivo index.html. Você pode abri-lo diretamente no seu navegador, sem a necessidade de servidores adicionais, já que a página é estática.

Basta clicar duas vezes no arquivo index.html ou abrir diretamente com seu navegador preferido.

### 4. (Opcional) Compilação do TypeScript

Caso deseje modificar o código TypeScript, será necessário compilar os arquivos .ts em arquivos .js. Para isso, siga os passos abaixo:

#### 4.1 Compile os Arquivos TypeScript

Para compilar os arquivos TypeScript para JavaScript, basta rodar o seguinte comando no diretório do projeto:

```bash
tsc src/ts/script.ts
```

Esse comando vai compilar todos os arquivos .ts para .js na pasta js/ (caso tenha modificado o caminho no seu tsconfig.json, ajuste conforme necessário).

### 5. Visualize o Projeto

Após compilar o TypeScript (se necessário), você pode recarregar o arquivo index.html no navegador para visualizar as alterações.