# Local Environment Setup - Agibank Interview

Este projeto centraliza a infraestrutura local necessária para executar os microsserviços `customers-service` e `insurance-service`. Ele orquestra containers Docker para PostgreSQL, MongoDB e as próprias aplicações Java.

## 🚀 Pré-requisitos

*   Docker
*   Docker Compose

## 📦 Serviços e Portas

| Serviço | Porta Externa | Descrição |
| :--- | :--- | :--- |
| **customers-service** | `8080` | API de Clientes |
| **insurance-service** | `8081` | API de Seguros |
| **PostgreSQL** | `5432` | Banco de dados relacional |
| **MongoDB** | `27017` | Banco de dados NoSQL |

### 📂 Repositórios dos Serviços

⚠️ **Importante:** Para que o build funcione corretamente, todos os repositórios devem ser clonados no mesmo diretório pai. O script de subida espera encontrar as pastas dos projetos ao lado deste repositório (`local-env-setup`).

**Customers Service**

HTTPS:
```bash
git clone https://github.com/agibank-interview/customers.git
```

SSH:
```bash
git clone git@github.com:agibank-interview/customers.git
```

GitHub CLI:
```bash
gh repo clone agibank-interview/customers
```

**Insurance Service**

HTTPS:
```bash
git clone https://github.com/agibank-interview/insurance.git
```

SSH:
```bash
git clone git@github.com:agibank-interview/insurance.git
```

GitHub CLI:
```bash
gh repo clone agibank-interview/insurance.git
```

## 🛠️ Como Executar

O projeto inclui um script utilitário `local-env-setup.sh` para facilitar o gerenciamento do ambiente.

1.  **Dê permissão de execução ao script:**
    ```bash
    chmod +x local-env-setup.sh
    ```

2.  **Inicie o ambiente:**
    ```bash
    ./local-env-setup.sh up
    ```
    Isso irá construir as imagens e iniciar os containers em segundo plano.

    > ⚠️ **Atenção:** A primeira execução pode levar aproximadamente 4 minutos devido ao download das imagens Docker e builds do Gradle. Este tempo pode variar dependendo da sua conexão com a internet e desempenho da máquina.

3.  **Verifique o status:**
    ```bash
    ./local-env-setup.sh status
    ```

4.  **Pare o ambiente:**
    ```bash
    ./local-env-setup.sh stop
    ```

5.  **Remova o ambiente (containers e volumes):**
    ```bash
    ./local-env-setup.sh down
    ```

## 📮 Postman Collections

Para auxiliar nos testes e validação dos serviços, este projeto contém coleções do Postman organizadas por serviço, além de um arquivo de ambiente pré-configurado.

> ℹ️ **Nota:** Consulte também o `README.md` individual de cada serviço para obter o endereço do **Swagger** e detalhes específicos da implementação.

**Localização dos arquivos:**

*   **Environment (Variáveis de Ambiente):**
    *   `postman/agibank-env.postman_environment.json`
    *   *Importe este arquivo primeiro para carregar as variáveis base (URLs, portas, etc).*

*   **Customers Service:**
    *   `postman/customers-service/customers.postman_collection.json`
    *   `postman/customers-service/addresses.postman_collection.json`

*   **Insurance Service:**
    *   `postman/insurance-service/insurance.postman_collection.json`

## 🔐 Credenciais (Desenvolvimento)

As credenciais são configuradas via variáveis de ambiente no arquivo `.env`.

*   **Postgres Admin**: `admin` / `admin_pass`
*   **Mongo Admin**: `admin` / `admin_pass`

### Bancos de Dados Criados

*   **Postgres**:
    *   `customers` (User: `customers_db_user`)
    *   `insurance` (User: `insurance_db_user`)
*   **Mongo**:
    *   `insurance` (User: `insurance_db_user`)

## 📝 Notas Técnicas

*   O `docker-compose.yml` inclui `healthchecks` para garantir que as aplicações só iniciem após os bancos de dados estarem prontos.
*   O script de inicialização em `postgres/` cria as credenciais e o banco. As tabelas e a carga de dados serão criadas via scripts de migração, pelo Flyway de cada projeto.
*   O script de inicialização em `mongo/` cria as credenciais, banco, coleção e também popula a coleção com dados iniciais para testes.