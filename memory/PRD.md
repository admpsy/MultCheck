# Tiger Rentank — CheckFlowUp SaaS

## Descrição
Sistema SaaS multi-módulo para gestão de checklists de operações logísticas, incluindo Transbordo, Logística Interna e Logística Externa.

## Arquitetura
- **Frontend**: HTML/CSS/JS puro (single-page application)
- **Storage**: IndexedDB (local) + localStorage para configurações
- **Backend**: FastAPI (para futuras expansões)

## Módulos
1. **Transbordo** - Checklist de operações de transbordo de cargas
2. **Logística Interna** - Movimentação e controle de equipamentos dentro da planta
3. **Logística Externa** - Atendimentos externos, certificação e inspeção
4. **Visão Geral** - Dashboard consolidado

## Implementações Realizadas (24/03/2026)

### Alterações no Módulo Transbordo
1. ✅ **Substituição da seção "Inspeção do Equipamento"** por seção **"Equipamentos"** (igual Logística Externa)
   - Campos: Nº Série, Modelo, Data Certificação, Vencimento Certif, Nº Eslinga, Data Cert Eslinga, Vencimento Eslinga, Observações, Fotos
   - Status: Aprovado, Reprovado, Pendente
   - Botão "+ Adicionar Equipamento"

2. ✅ **Remoção da opção "TROCA"** das questões de Inspeção da Carga
   - Contentores: apenas SIM, NÃO, N/A
   - IBCs/Tambores: apenas SIM, NÃO, N/A

3. ✅ **Nova seção "Modelos de Equipamentos"** na aba Configurações
   - Cadastrar novos modelos
   - Remover modelos existentes
   - Modelos aparecem no dropdown do Equipamento

## Backlog / Próximas Implementações
- P0: Migração para backend com MongoDB para persistência na nuvem
- P1: Sistema de autenticação de usuários
- P1: Sincronização multi-dispositivo
- P2: Relatórios avançados com exportação
- P2: Integração com email para notificações

## Arquivos Principais
- `/app/frontend/public/app.html` - Aplicação principal (HTML único)
- `/app/backend/server.py` - API FastAPI (básica)

## Configurações (localStorage)
- `tiger_transbordo_config` - Clientes, Responsáveis, Produtos, Modelos
- `tiger_draft_*` - Rascunhos automáticos
- `tiger_theme` - Tema (dark/light)
