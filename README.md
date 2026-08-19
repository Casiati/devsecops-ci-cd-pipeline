# 🚀 Enterprise DevSecOps CI/CD Pipeline

[![CI/CD & DevSecOps Pipeline](https://github.com/Casiati/devsecops-ci-cd-pipeline/actions/workflows/ci.yml/badge.svg)](https://github.com/Casiati/devsecops-ci-cd-pipeline/actions/workflows/ci.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![Docker](https://img.shields.io/badge/Docker-Multi--Stage-2496ED?logo=docker&logoColor=white)](https://www.docker.com/)
[![Security: Trivy](https://img.shields.io/badge/Security-Trivy-007acc?logo=aquasecurity&logoColor=white)](https://trivy.dev/)
[![Secret Scan: Gitleaks](https://img.shields.io/badge/Secret_Scan-Gitleaks-critical)](https://github.com/gitleaks/gitleaks)

Repositório modelo demonstrando a implementação de uma esteira completa de **CI/CD e DevSecOps** para microsserviços modernos, garantindo qualidade, segurança e entrega automatizada com **GitHub Actions** e **Docker**.

---

## 🏗️ Arquitetura do Pipeline

```mermaid
flowchart TD
    A[Push / PR no GitHub] --> B[🧪 Job 1: Test & Lint]
    A --> C[🔑 Job 2: Gitleaks Secret Scan]
    
    B --> D[🛡️ Job 3: Docker Build + Trivy Scan]
    C --> D
    
    D --> E{Branch == main?}
    E -- Sim --> F[🚀 Job 4: Publish no GHCR]
    E -- Não --> G[✅ PR Validada com Sucesso]
```

---

## 🔒 Pilares de Segurança (DevSecOps)

1. **Secret Scanning com Gitleaks**: Varredura automatizada em todo o histórico do commit para impedir vazamento acidental de tokens, chaves SSH e senhas.
2. **Container Security com Trivy**: Análise estática da imagem Docker gerada, detectando vulnerabilidades conhecidas (CVEs) em pacotes do sistema operacional e dependências da aplicação.
3. **Docker Multi-Stage Build**:
   - Imagem final enxuta baseada em `alpine`.
   - Execução com usuário sem privilégios de root (`USER node`).
   - `HEALTHCHECK` embutido para monitoramento do container em clusters (Kubernetes / ECS).

---

## 📦 Estrutura do Projeto

```text
├── .github/
│   └── workflows/
│       └── ci.yml              # Pipeline completo CI/CD + DevSecOps
├── src/
│   ├── app.js                  # Configuração dos endpoints e health checks
│   └── index.js                # Inicialização do servidor com graceful shutdown
├── tests/
│   └── app.test.js             # Testes automatizados unitários e de integração
├── Dockerfile                  # Multi-stage build seguro e otimizado
├── .dockerignore               # Otimização de contexto do Docker
└── package.json                # Gerenciamento de dependências e scripts
```

---

## 🚀 Como Executar Localmente

### Pré-requisitos
- Node.js 20+
- Docker (opcional)

### 1. Clonar e rodar localmente
```bash
# Instalar dependências
npm install

# Rodar os testes automatizados
npm test

# Iniciar o servidor
npm start
```

### 2. Rodar via Docker
```bash
# Build da imagem
docker build -t devsecops-api .

# Executar o container
docker run -d -p 3000:3000 --name api devsecops-api

# Verificar status de saúde
curl http://localhost:3000/healthz
```

---

## 👨‍💻 Autor

Desenvolvido por **Lucas Robiati**  
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=flat&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/lucas-robiati-129795133/)
[![GitHub](https://img.shields.io/badge/GitHub-Profile-181717?style=flat&logo=github&logoColor=white)](https://github.com/Casiati)
