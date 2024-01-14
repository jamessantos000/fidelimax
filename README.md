# Fidelimax - Perguntas dinâmicas

Este arquivo fornece instruções para iniciar a aplicação e alguns insights sobre o desenvolvimento. Certifique-se de seguir as orientações abaixo para garantir uma inicialização suave e compreensão adequada do projeto.


## Índice

- [Configuração com Docker](#configuração-com-docker)
- [Configuração sem Docker](#configuração-sem-docker)
- [Storybook e Documentação de Componentes](#inicialização-do-storybook)
- [Referências e Tempo de Projeto](#referências-e-tempo-de-projeto)
- [Abordagem e Observações](#abordagem-e-observações)

## Configuração com Docker

1. Abra o terminal no diretório raiz do projeto.
2. Execute o seguinte comando:
```bash
docker compose up -d
```
Isso iniciará a aplicação em um ambiente Dockerizado.

1. Por padrão, o front-end irá iniciar na porta 3000
2. Por padrão, o storybook irá iniciar na porta 6006

## Configuração sem Docker

### Inicialização do Front-end sem Docker
1. Abra o terminal no diretório raiz do projeto.
2. Execute os seguintes comandos:
```bash
npm i
npm run start
```

### Inicialização do Storybook

Para visualizar a documentação de componentes separadamente usando o Storybook, siga as etapas abaixo:

1. Certifique-se de ter instalado todas as dependências do projeto.
2. Abra o terminal no diretório raiz do projeto.
3. Execute o seguinte comando:
```bash
npm run storybook
```
Isso iniciará o Storybook, proporcionando uma visualização interativa dos componentes.

## Considerações de Desenvolvimento

#### O tempo total estimado para o projeto foi de aproximadamente 20 horas.
#### A aplicação foi desenvolvida levando em consideração referências de tamanho, distanciamento e informações do Figma.
#### Diversas abordagens foram exploradas durante o projeto para atingir os mesmos resultados, demonstrando a capacidade de pensar de maneiras diferentes.

## Observações Importantes

#### Na documentação, foram identificados 6 tipos de resposta, enquanto no Figma há 7. 
#### A aplicação foi projetada considerando a menor resolução de smartphone (420px).