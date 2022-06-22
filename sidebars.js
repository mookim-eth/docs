const sidebars = {
  docs: [
    { type: "doc", label: " Welcome to Celo 🌱", id: "welcome" },
    {
      type: "category",
      label: " Overview",
      items: [
        { type: "doc", label: "What is Celo?", id: "learn/why-celo" },
        { type: "doc", label: "Architecture", id: "learn/celo-stack" },
        { type: "doc", label: "Whitepapers", id: "learn/celo-whitepapers" },
        { type: "doc", label: "Glossary", id: "getting-started/glossary" },
        { type: "doc", label: "FAQs", id: "faqs" },
        // { type: "doc", label: "Highlights", id: "learn/celo-highlights" },
        // {
        //   type: "doc",
        //   label: "Economic Model",
        //   id: "learn/celo-economic-model",
        // },
        // { type: "doc", label: "Milestones", id: "learn/celo-milestones" },

        // { type: "doc", label: "Ecosystem", id: "learn/celo-ecosystem" },
        // { type: "doc", label: "Key Concepts", id: "learn/key-concepts" },
        // {
        //   type: "doc",
        //   label: "Community",
        //   id: "community/join-the-community",
        // },
      ],
    },
    {
      type: "category",
      label: "Wallets",
      items: [
        {
          type: "doc",
          label: "Digital Wallets",
          id: "getting-started/wallets/index",
        },
        {
          type: "category",
          label: "Celo Wallet",
          items: [
            {
              type: "doc",
              label: "Functionality",
              id: "celo-codebase/wallet/how-the-wallet-works/README",
            },
            {
              type: "doc",
              label: "Verification",
              id: "celo-codebase/wallet/how-the-wallet-works/verification",
            },
            "celo-codebase/wallet/how-the-wallet-works/invitations",
            "celo-codebase/wallet/how-the-wallet-works/sending-and-requesting-payments",
            "celo-codebase/wallet/how-the-wallet-works/ultralight-node-sync",
          ],
        },
        {
          type: "category",
          label: "MetaMask",
          items: [
            {
              type: "doc",
              label: "MetaMask and Celo",
              id: "getting-started/wallets/using-metamask-with-celo/index",
            },
            {
              type: "doc",
              label: "Manual Setup",
              id:
                "getting-started/wallets/using-metamask-with-celo/manual-setup",
            },
            {
              type: "doc",
              label: "Programmatic Setup",
              id:
                "getting-started/wallets/using-metamask-with-celo/programmatic-setup",
            },
            {
              type: "doc",
              label: "MetaMask and Valora",
              id:
                "getting-started/wallets/using-metamask-with-celo/metamask-valora-import",
            },
            {
              type: "doc",
              label: "MetaMask and Ledger",
              id:
                "getting-started/wallets/using-metamask-with-celo/using-a-ledger-with-metamask",
            },
          ],
        },
        {
          type: "category",
          label: "Ledger Wallet",
          items: [
            {
              type: "doc",
              label: "Set up a Ledger Wallet",
              id: "celo-holder-guide/ledger",
            },
            {
              type: "doc",
              label: "Connect to Celo Terminal",
              id: "celo-holder-guide/connecting-ledger-celo-terminal-wallet",
            },
            {
              type: "doc",
              label: "Connect to Celo Web Wallet",
              id: "celo-holder-guide/connecting-ledger-celo-web-wallet",
            },
            {
              type: "doc",
              label: "Connect to Celo CLI",
              id: "celo-holder-guide/connecting-ledger-celocli",
            },
          ],
        },
        {
          type: "link",
          label: "Staking",
          href:
            "https://medium.com/stake-service/hey-guys-today-well-take-a-look-at-how-you-can-use-the-cello-wallet-to-stake-your-own-cello-92730ac24aa5",
        },
      ],
    },
    {
      type: "category",
      label: "Protocol",
      items: [
        { type: "doc", label: "Overview", id: "celo-codebase/protocol/index" },
        {
          type: "category",
          label: "Proof-of-Stake",
          items: [
            {
              type: "doc",
              label: "Overview",
              id: "celo-codebase/protocol/proof-of-stake/index",
            },
            {
              type: "doc",
              label: "Validator Groups",
              id: "celo-codebase/protocol/proof-of-stake/validator-groups",
            },
            {
              type: "doc",
              label: "Locked CELO",
              id: "celo-codebase/protocol/proof-of-stake/locked-gold",
            },
            {
              type: "doc",
              label: "Validator Elections",
              id: "celo-codebase/protocol/proof-of-stake/validator-elections",
            },
            {
              type: "category",
              label: "Epoch Rewards",
              items: [
                {
                  type: "doc",
                  label: "Overview",
                  id: "celo-codebase/protocol/proof-of-stake/epoch-rewards",
                },
                {
                  type: "doc",
                  label: "Validator Rewards",
                  id: "celo-codebase/protocol/proof-of-stake/validator-rewards",
                },
                {
                  type: "doc",
                  label: "Locked CELO Rewards",
                  id:
                    "celo-codebase/protocol/proof-of-stake/locked-gold-rewards",
                },
                {
                  type: "doc",
                  label: "Community Fund",
                  id: "celo-codebase/protocol/proof-of-stake/community-fund",
                },
                {
                  type: "doc",
                  label: "Carbon Offsetting Fund",
                  id:
                    "celo-codebase/protocol/proof-of-stake/carbon-offsetting-fund",
                },
              ],
            },
            {
              type: "doc",
              label: "Penalties",
              id: "celo-codebase/protocol/proof-of-stake/penalties",
            },
          ],
        },
        {
          type: "category",
          label: "Consensus",
          items: [
            {
              type: "doc",
              label: "Overview",
              id: "celo-codebase/protocol/consensus/index",
            },
            {
              type: "doc",
              label: "Validator Set Differences",
              id: "celo-codebase/protocol/consensus/validator-set-differences",
            },
            {
              type: "doc",
              label: "Locating Nodes",
              id: "celo-codebase/protocol/consensus/locating-nodes",
            },
            {
              type: "doc",
              label: "Ultralight Sync",
              id: "celo-codebase/protocol/consensus/ultralight-sync",
            },
          ],
        },
        {
          type: "doc",
          label: "Governance",
          id: "celo-codebase/protocol/governance",
        },
        {
          type: "category",
          label: "Transactions",
          items: [
            {
              type: "doc",
              label: "Overview",
              id: "celo-codebase/protocol/transactions/index",
            },
            "celo-codebase/protocol/transactions/native-currency",
            "celo-codebase/protocol/transactions/erc20-transaction-fees",
            "celo-codebase/protocol/transactions/gas-pricing",
            "celo-codebase/protocol/transactions/escrow",
            "celo-codebase/protocol/transactions/tx-comment-encryption",
            "celo-codebase/protocol/transactions/full-node-incentives",
          ],
        },
        {
          type: "category",
          label: "Stability",
          items: [
            {
              type: "doc",
              label: "Overview",
              id: "celo-codebase/protocol/stability/index",
            },
            "celo-codebase/protocol/stability/doto",
            "celo-codebase/protocol/stability/granda-mento",
            "celo-codebase/protocol/stability/oracles",
            "celo-codebase/protocol/stability/stability-fees",
            "celo-codebase/protocol/stability/adding_stable_assets",
            "celo-codebase/protocol/stability/tobin-tax",
          ],
        },
        {
          type: "category",
          label: "Identity",
          items: [
            {
              type: "doc",
              label: "Overview",
              id: "celo-codebase/protocol/identity/index",
            },
            "celo-codebase/protocol/identity/metadata",
            "celo-codebase/protocol/identity/randomness",
            "celo-codebase/protocol/identity/smart-contract-accounts",
            "celo-codebase/protocol/identity/encrypted-cloud-backup",
            {
              type: "category",
              label: "ODIS",
              items: [
                {
                  type: "doc",
                  label: "Overview",
                  id: "celo-codebase/protocol/odis/index",
                },
                {
                  type: "category",
                  label: "Use Cases",
                  items: [
                    "celo-codebase/protocol/odis/use-cases/phone-number-privacy",
                    "celo-codebase/protocol/odis/use-cases/key-hardening",
                  ],
                },
                {
                  type: "category",
                  label: "Domains",
                  items: [
                    {
                      type: "doc",
                      label: "Overview",
                      id: "celo-codebase/protocol/odis/domains/index",
                    },
                    "celo-codebase/protocol/odis/domains/sequential-delay-domain",
                  ],
                },
              ],
            },
          ],
        },
        {
          type: "doc",
          label: "Ultralight Client",
          id: "celo-codebase/protocol/plumo",
        },
      ],
    },
    {
      type: "category",
      label: "Nodes",
      items: [
        {
          type: "doc",
          label: "Overview",
          id: "getting-started/choosing-a-network",
        },
        {
          type: "category",
          label: "Mainnet",
          items: [
            {
              type: "doc",
              label: "Celo Mainnet",
              id: "getting-started/mainnet/index",
            },
            {
              type: "doc",
              label: "Run Mainnet Validator",
              id: "getting-started/mainnet/running-a-validator-in-mainnet",
            },
            {
              type: "doc",
              label: "Run Mainnet Full Node",
              id: "getting-started/mainnet/running-a-full-node-in-mainnet",
            },
          ],
        },
        {
          type: "category",
          label: "Alfajores Testnet",
          items: [
            {
              type: "doc",
              label: "Alfajores Testnet",
              id: "getting-started/alfajores-testnet/index",
            },
            {
              type: "doc",
              label: "Run Alfajores Full Node",
              id:
                "getting-started/alfajores-testnet/running-a-full-node-in-alfajores",
            },
            {
              type: "doc",
              label: "Mobile Wallet",
              id: "getting-started/alfajores-testnet/using-the-mobile-wallet",
            },
            {
              type: "doc",
              label: "Testnet Faucet",
              id: "getting-started/alfajores-testnet/faucet",
            },
          ],
        },
        {
          type: "category",
          label: "Baklava Testnet",
          items: [
            {
              type: "doc",
              label: "Baklava Testnet",
              id: "getting-started/baklava-testnet/index",
            },
            {
              type: "doc",
              label: "Run Baklava Validator",
              id:
                "getting-started/baklava-testnet/running-a-validator-in-baklava",
            },
            {
              type: "doc",
              label: "Run Baklava Full Node",
              id:
                "getting-started/baklava-testnet/running-a-full-node-in-baklava",
            },
          ],
        },
        {
          type: "doc",
          label: "Hosted Nodes",
          id: "getting-started/hosted-nodes",
        },
      ],
    },
    {
      type: "category",
      label: "Endpoints",
      items: [
        {
          type: "doc",
          label: "Forno",
          id: "developer-resources/forno/index",
        },
        {
          type: "link",
          label: "Figment",
          href: "https://www.figment.io/datahub/celo",
        },
        {
          type: "link",
          label: "Quicknode",
          href: "https://www.quicknode.com/chains/celo",
        },
        {
          type: "link",
          label: "Tatum",
          href: "https://pages.tatum.io/celo",
        },
        {
          type: "link",
          label: "Ankr",
          href: "https://www.ankr.com/protocol/public/celo/",
        },
        {
          type: "link",
          label: "All that Node",
          href: "https://www.allthatnode.com/celo.dsrv",
        },
      ],
    },

    {
      type: "category",
      label: "Addresses",
      items: [
        { type: "doc", label: "Contract Addresses", id: "contract-addresses" },
        { type: "doc", label: "Tokens Addresses", id: "token-addresses" },
      ],
    },

    // {
    //   type: "category",
    //   label: "Staking",
    //   items: [
    //     { type: "doc", label: "Topic", id: "learn/why-celo" },
    //     { type: "doc", label: "Topic", id: "learn/why-celo" },
    //     { type: "doc", label: "Topic", id: "learn/why-celo" },
    //   ],
    // },
    {
      type: "category",
      label: "Holders",
      items: [
        { type: "doc", label: "Overview", id: "celo-holder-guide/owners" },
        {
          type: "category",
          label: "Manage Assets",
          items: [
            {
              type: "doc",
              label: "Self-Custody CELO",
              id: "celo-holder-guide/quick-start",
            },
            {
              type: "doc",
              label: "Asset Management",
              id: "celo-holder-guide/cusd",
            },
            {
              type: "doc",
              label: "Release Gold",
              id: "celo-holder-guide/release-gold",
            },
            {
              type: "doc",
              label: "Exchange Celo Assets",
              id: "celo-holder-guide/celo-exchange-bot",
            },
          ],
        },
        {
          type: "category",
          label: "Voting",
          items: [
            {
              type: "doc",
              label: "Voting for Validators",
              id: "celo-holder-guide/voting-validators",
            },
            {
              type: "doc",
              label: "Voting on Governance",
              id: "celo-holder-guide/voting-governance",
            },
            {
              type: "doc",
              label: "Governance Cheat Sheet",
              id: "celo-holder-guide/governance-cheat-sheet",
            },
          ],
        },
        {
          type: "category",
          label: "Recovery",
          items: [
            {
              type: "doc",
              label: "Recover from ETH Address",
              id: "celo-holder-guide/eth-recovery",
            },
            {
              type: "doc",
              label: "Recover from Celo Address",
              id: "celo-holder-guide/celo-recovery",
            },
          ],
        },
      ],
    },
    {
      type: "category",
      label: "Validators",
      items: [
        { type: "doc", label: "Overview", id: "validator-guide/overview" },
        {
          type: "doc",
          label: "Attestation Service",
          id: "validator-guide/attestation-service",
        },
        {
          type: "category",
          label: "Key Management",
          items: [
            {
              type: "doc",
              label: "Summary",
              id: "validator-guide/key-management/summary",
            },
            {
              type: "doc",
              label: "Key Management",
              id: "validator-guide/key-management/detailed",
            },
            {
              type: "doc",
              label: "Key Rotation",
              id: "validator-guide/key-management/key-rotation",
            },
          ],
        },
        {
          type: "doc",
          label: "Nodes and Services",
          id: "validator-guide/securing-nodes-and-services",
        },
        { type: "doc", label: "Monitoring", id: "validator-guide/monitoring" },
        {
          type: "doc",
          label: "DevOps Best Practices",
          id: "validator-guide/devops-best-practices",
        },
        {
          type: "doc",
          label: "Node Upgrades",
          id: "validator-guide/node-upgrades",
        },
        { type: "doc", label: "Running Proxies", id: "validator-guide/proxy" },
        {
          type: "doc",
          label: "Validator Explorer",
          id: "validator-guide/validator-explorer",
        },
        {
          type: "doc",
          label: "Voting Policy",
          id: "validator-guide/celo-foundation-voting-policy",
        },
        {
          type: "doc",
          label: "Celo Signal",
          id: "validator-guide/celo-signal",
        },
        {
          type: "doc",
          label: "Validator FAQ",
          id: "getting-started/validator-troubleshooting-faq",
        },
      ],
    },
    {
      type: "category",
      label: "Developers",
      items: [
        { type: "doc", label: "Overview", id: "developer-resources/overview" },
        {
          type: "category",
          label: "Local Environment",
          items: [
            {
              type: "doc",
              label: "Using Mac",
              id: "developer-resources/using-mac",
            },
            {
              type: "doc",
              label: "Using Windows",
              id: "developer-resources/develop-on-windows",
            },
            {
              type: "doc",
              label: "Testnet Wallet",
              id: "developer-resources/testnet-wallet",
            },
          ],
        },
        // {
        //   type: "category",
        //   label: "Wallet",
        //   items: [
        //     {
        //       type: "doc",
        //       label: "MetaMask",
        //       id: "developer-resources/testnet-wallet",
        //     },
        //     {
        //       type: "category",
        //       label: "Celo Wallet",
        //       items: [
        //         {
        //           type: "doc",
        //           label: "Celo Wallet",
        //           id: "celo-codebase/wallet/index",
        //         },
        //         {
        //           type: "doc",
        //           label: "Running the wallet locally",
        //           id: "celo-codebase/wallet/intro",
        //         },
        //         {
        //           type: "doc",
        //           label: "Using the Wallet",
        //           id: "getting-started/using-the-wallet",
        //         },
        //       ],
        //     },
        //     {
        //       type: "link",
        //       label: "Faucet",
        //       href: "https://celo.org/developers/faucet",
        //     },
        //   ],
        // },
        {
          type: "category",
          label: "Deploy on Celo",
          items: [
            {
              type: "doc",
              label: "Overview",
              id: "developer-resources/deploy-dapp",
            },
            {
              type: "doc",
              label: "Using Remix",
              id: "developer-resources/deploy-remix",
            },
            {
              type: "doc",
              label: "Using Truffle",
              id: "developer-resources/deploy-truffle",
            },
            {
              type: "doc",
              label: "Using Hardhat",
              id: "developer-resources/deploy-hardhat",
            },
            {
              type: "doc",
              label: "Using Replit",
              id: "developer-resources/deploy-replit",
            },
          ],
        },
        {
          type: "category",
          label: "Migrate to Celo",
          items: [
            {
              type: "doc",
              label: "Ethereum Developers",
              id: "developer-resources/celo-for-eth-devs",
            },
          ],
        },
        {
          type: "doc",
          label: "Developer Tools",
          id: "learn/evm-compatible-tooling",
        },
        // {
        //   type: "category",
        //   label: "Developer Tools",
        //   items: [
        //     { type: "doc", label: "Overview", id: "learn/developer-tools" },
        // {
        //   type: "category",
        //   label: "SDKs",
        //   items: [
        //     {
        //       type: "category",
        //       label: "ContractKit",
        //       items: [
        //         {
        //           type: "doc",
        //           label: "Overview",
        //           id: "developer-resources/contractkit/index",
        //         },
        //         {
        //           type: "doc",
        //           label: "Setup",
        //           id: "developer-resources/contractkit/setup",
        //         },
        //         {
        //           type: "doc",
        //           label: "Usage",
        //           id: "developer-resources/contractkit/usage",
        //         },
        //         {
        //           type: "doc",
        //           label: "Use Web3 from ContracKit",
        //           id:
        //             "developer-resources/contractkit/notes-web3-with-contractkit",
        //         },
        //         {
        //           type: "doc",
        //           label: "Wrappers & Registry Contracts",
        //           id:
        //             "developer-resources/contractkit/contracts-wrappers-registry",
        //         },
        //         {
        //           type: "doc",
        //           label: "Query On-Chain Identifiers with ODIS",
        //           id: "developer-resources/contractkit/odis",
        //         },
        //         {
        //           type: "doc",
        //           label: "Migrate to ContractKit v1",
        //           id:
        //             "developer-resources/contractkit/migrating-to-contractkit-v1",
        //         },
        //         {
        //           type: "doc",
        //           label: "Migrate to ContractKit v2",
        //           id:
        //             "developer-resources/contractkit/migrating-to-contractkit-v2",
        //         },
        //       ],
        //     },
        //     {
        //       type: "doc",
        //       label: "use-contractkit",
        //       id: "developer-resources/use-contractkit",
        //     },
        //     {
        //       type: "doc",
        //       label: "Ethers.JS Wrapper",
        //       id: "developer-resources/ethers-js-wrapper",
        //     },
        //     {
        //       type: "doc",
        //       label: "WalletConnect",
        //       id: "learn/walletconnect",
        //     },
        //     {
        //       type: "category",
        //       label: "DAppKit",
        //       items: [
        //         {
        //           type: "doc",
        //           label: "Overview",
        //           id: "developer-resources/dappkit/index",
        //         },
        //         {
        //           type: "doc",
        //           label: "Setup",
        //           id: "developer-resources/dappkit/setup",
        //         },
        //         {
        //           type: "doc",
        //           label: "Usage",
        //           id: "developer-resources/dappkit/usage",
        //         },
        //       ],
        //     },
        //     {
        //       type: "link",
        //       label: "Command Line",
        //       href:
        //         "https://docs.celo.org/command-line-interface/introduction",
        //     },
        //   ],
        // },
        // {
        //   type: "category",
        //   label: "Infrastructure",
        //   items: [
        //     {
        //       type: "link",
        //       label: "BlockScout",
        //       href: "https://explorer.celo.org/",
        //     },
        //     {
        //       type: "link",
        //       label: "ODIS",
        //       href:
        //         "https://docs.celo.org/command-line-interface/introduction",
        //     },
        //     {
        //       type: "link",
        //       label: "The Graph",
        //       href: "https://thegraph.com/en/",
        //     },
        //     {
        //       type: "link",
        //       label: "DappLooker",
        //       href: "https://dapplooker.com/integration/celo",
        //     },
        //     {
        //       type: "link",
        //       label: "stats.celo.org",
        //       href: "https://stats.celo.org/",
        //     },
        //   ],
        // },
        // {
        //   type: "category",
        //   label: "Hosted Nodes",
        //   items: [
        //     {
        //       type: "doc",
        //       label: "Forno",
        //       id: "developer-resources/forno/index",
        //     },
        //   ],
        // },
        // {
        //   type: "doc",
        //   label: "Development Chain",
        //   id: "developer-resources/walkthroughs/development-chain",
        // },
        //   ],
        // },
      ],
    },
    {
      type: "category",
      label: "Integrations",
      items: [
        {
          type: "doc",
          label: "Overview",
          id: "developer-resources/integrations/integrations",
        },
        {
          type: "doc",
          label: "Dapps",
          id: "developer-resources/integrations/dapps",
        },
        {
          type: "doc",
          label: "General",
          id: "developer-resources/integrations/general",
        },
        {
          type: "doc",
          label: "Checklist",
          id: "developer-resources/integrations/checklist",
        },
        {
          type: "doc",
          label: "Custody",
          id: "developer-resources/integrations/custody",
        },
        {
          type: "doc",
          label: "Listings",
          id: "developer-resources/integrations/listings",
        },
        {
          type: "doc",
          label: "Cloud HSM",
          id: "developer-resources/integrations/cloud-hsm",
        },
        // {
        //   type: "category",
        //   label: "Cash-in/out",
        //   items: [
        //     { type: "doc", label: "Ramp", id: "learn/why-celo" },
        //     { type: "doc", label: "Simplex", id: "learn/why-celo" },
        //     { type: "doc", label: "Bidali", id: "learn/why-celo" },
        //   ],
        // },
        // {
        //   type: "category",
        //   label: "Exchanges",
        //   items: [
        //     { type: "doc", label: "Ubeswap", id: "learn/why-celo" },
        //     { type: "doc", label: "Mobius", id: "learn/why-celo" },
        //     { type: "doc", label: "Symmetric", id: "learn/why-celo" },
        //   ],
        // },
        // {
        //   type: "category",
        //   label: "Identity",
        //   items: [
        //     { type: "doc", label: "Nomspace", id: "learn/why-celo" },
        //     { type: "doc", label: "Celo Identity", id: "learn/why-celo" },
        //   ],
        // },
        // {
        //   type: "category",
        //   label: "Lending Markets",
        //   items: [
        //     { type: "doc", label: "Moola", id: "learn/why-celo" },
        //     { type: "doc", label: "Pinnata", id: "learn/why-celo" },
        //     { type: "doc", label: "Resource", id: "learn/why-celo" },
        //   ],
        // },
        // {
        //   type: "category",
        //   label: "Yield Chasers",
        //   items: [
        //     { type: "doc", label: "Beefy", id: "learn/why-celo" },
        //     { type: "doc", label: "Revo Market", id: "learn/why-celo" },
        //   ],
        // },
        // {
        //   type: "category",
        //   label: "Others",
        //   items: [
        //     { type: "doc", label: "Impact Market", id: "learn/why-celo" },
        //     { type: "doc", label: "Valora", id: "learn/why-celo" },
        //   ],
        // },
      ],
    },
    {
      type: "category",
      label: "Bridges",
      items: [
        {
          type: "doc",
          label: "Celo Bridges",
          id: "celo-codebase/protocol/bridging/bridging-to-celo",
        },
        {
          type: "category",
          label: "Etherscan",
          items: [
            {
              type: "doc",
              label: "Native Assets with Etherscan",
              id: "celo-codebase/protocol/bridging/bridging-native-assets",
            },
            {
              type: "doc",
              label: "Tokens with Etherscan",
              id:
                "celo-codebase/protocol/bridging/bridging-tokens-with-etherscan",
            },
          ],
        },
        {
          type: "category",
          label: "Optics",
          items: [
            {
              type: "doc",
              label: "Optics Bridge GUI",
              id: "celo-codebase/protocol/bridging/optics-gui",
            },
            {
              type: "doc",
              label: "Optics Bridge",
              id: "celo-codebase/protocol/optics",
            },
            {
              type: "doc",
              label: "Migrating to Optics v2",
              id: "celo-codebase/protocol/bridging/migrating-to-optics-v2",
            },
            {
              type: "doc",
              label: "Optics Bridge FAQ",
              id: "celo-codebase/protocol/bridging/optics-bridge-faq",
            },
          ],
        },
        {
          type: "link",
          label: "AllBridge",
          href: "https://app.allbridge.io/bridge?from=ETH&to=POL&asset=USDC",
        },
        {
          type: "link",
          label: "Moss",
          href: "https://bridge.moss.earth/",
        },
      ],
    },
    {
      type: "category",
      label: "Oracles",
      items: [
        {
          type: "doc",
          label: "Celo Oracles",
          id: "celo-codebase/protocol/oracles/oracles-on-celo",
        },
        {
          type: "doc",
          id: "celo-codebase/protocol/oracles/band-protocol-how-to",
        },
        {
          type: "doc",
          id: "celo-codebase/protocol/oracles/redstone-protocol-how-to",
        },
      ],
    },
    {
      type: "category",
      label: "Resources",
      items: [
        {
          type: "doc",
          label: "Gallery",
          id: "developer-resources/celo-dapp-gallery",
        },
        {
          type: "link",
          href: "https://explorer.celo.org/",
          label: "Explorer",
        },
        {
          type: "link",
          href: "https://celo.org/developers/faucet",
          label: "Faucet",
        },
        { type: "link", href: "https://forum.celo.org/", label: "Forum" },
        {
          type: "link",
          href: "https://thecelo.com/",
          label: "Stats",
        },
        {
          type: "link",
          href: "https://discord.com/invite/6yWMkgM",
          label: "Chat",
        },
      ],
    },

    {
      type: "category",
      label: "Community",
      items: [
        { type: "doc", label: "Overview", id: "community/contributing" },
        {
          type: "doc",
          label: "Developer Events",
          id: "community/developer-events",
        },
        {
          type: "doc",
          label: "Fundraising",
          id: "community/fundraising",
        },
        {
          type: "category",
          label: "Ambassadors",
          items: [
            { type: "doc", label: "Guidelines", id: "community/guidelines" },
            { type: "doc", label: "Code", id: "community/code-contributors" },
            {
              type: "doc",
              label: "Translation",
              id: "community/translation-contributors",
            },
            {
              type: "doc",
              label: "Documentation ",
              id: "community/documentation-contributors",
            },
            {
              type: "doc",
              label: "Community Improvements",
              id: "community/CIP-contributors",
            },
          ],
        },
        {
          type: "doc",
          label: "Code of Conduct",
          id: "community/code-of-conduct",
        },
        {
          type: "doc",
          label: "Grant Playbook",
          id: "community/grant-playbook",
        },
        {
          type: "category",
          label: " Release Process",
          items: [
            {
              type: "doc",
              label: "Overview",
              id: "community/release-process/README",
            },
            {
              type: "doc",
              label: "Smart Contracts",
              id: "community/release-process/smart-contracts",
            },
            {
              type: "doc",
              label: "Blockchain Client",
              id: "community/release-process/blockchain-client",
            },
            {
              type: "doc",
              label: "CeloCLI and ContractKit",
              id:
                "community/release-process/base-cli-contractkit-dappkit-utils",
            },
            {
              type: "doc",
              label: "Attestation Service",
              id: "community/release-process/attestation-service",
            },
          ],
        },
        {
          type: "category",
          label: "Important Information",
          items: [
            {
              type: "doc",
              label: "Alfajores Testnet Disclaimer",
              id: "important-information/alfajores-testnet-disclaimer",
            },
            {
              type: "doc",
              label: "Baklava Testnet Disclaimer",
              id: "important-information/baklava-testnet-disclaimer",
            },
            {
              type: "doc",
              label: "Mainnet Disclaimer",
              id: "important-information/mainnet-network-disclaimer",
            },
          ],
        },
        {
          type: "category",
          label: "Resources",
          items: [
            {
              type: "category",
              label: "Quick Guides",
              items: [
                { type: "doc", label: "Celo", id: "learn/celo-summary" },
                {
                  type: "doc",
                  label: "Celo Protocol",
                  id: "learn/celo-protocol-summary",
                },
                { type: "doc", label: "Valora", id: "learn/valora-summary" },
                { type: "doc", label: "CELO", id: "learn/CELO-coin-summary" },
                {
                  type: "doc",
                  label: "Celo Stablecoins",
                  id: "learn/platform-native-stablecoins-summary",
                },
              ],
            },
            // { type: "doc", label: "Figment Learn", id: "learn/figment-learn", },
            {
              type: "doc",
              label: "Celo Resources",
              id: "learn/celo-resources",
            },
          ],
        },
      ],
    },
    {
      type: "link",
      href: "https://github.com/celo-org/docs/issues",
      label: "Feedback",
    },
  ],

  // ######################################
  // CLI
  // ######################################

  cli: [
    {
      type: "doc",
      label: "Introduction",
      id: "command-line-interface/introduction",
    },
    { type: "doc", label: "Account", id: "command-line-interface/account" },
    { type: "doc", label: "Commands", id: "command-line-interface/commands" },
    { type: "doc", label: "Config", id: "command-line-interface/config" },
    { type: "doc", label: "DKG", id: "command-line-interface/dkg" },
    { type: "doc", label: "Election", id: "command-line-interface/election" },
    { type: "doc", label: "Exchange", id: "command-line-interface/exchange" },
    {
      type: "doc",
      label: "Governance",
      id: "command-line-interface/governance",
    },
    {
      type: "doc",
      label: "Grandamento",
      id: "command-line-interface/grandamento",
    },
    { type: "doc", label: "Help", id: "command-line-interface/help" },
    { type: "doc", label: "Identity", id: "command-line-interface/identity" },
    {
      type: "doc",
      label: "LockedGold",
      id: "command-line-interface/lockedgold",
    },
    { type: "doc", label: "Multisig", id: "command-line-interface/multisig" },
    { type: "doc", label: "Network", id: "command-line-interface/network" },
    { type: "doc", label: "Node", id: "command-line-interface/node" },
    { type: "doc", label: "Oracle", id: "command-line-interface/oracle" },
    { type: "doc", label: "Plugins", id: "command-line-interface/plugins" },
    {
      type: "doc",
      label: "ReleaseGold",
      id: "command-line-interface/releasegold",
    },
    { type: "doc", label: "Reserve", id: "command-line-interface/reserve" },
    { type: "doc", label: "Rewards", id: "command-line-interface/rewards" },
    { type: "doc", label: "Transfer", id: "command-line-interface/transfer" },
    { type: "doc", label: "Validator", id: "command-line-interface/validator" },
    {
      type: "doc",
      label: "ValidatorGroup",
      id: "command-line-interface/validatorgroup",
    },
  ],

  // develop: [
  //   {
  //     type: "category",
  //     label: "Develop",
  //     items: [
  //       { type: "doc", label: "Overview", id: "developer-resources/overview" },
  //       {
  //         type: "category",
  //         label: "Installation",
  //         items: [
  //           {
  //             type: "doc",
  //             label: "Using Mac",
  //             id: "developer-resources/using-mac",
  //           },
  //           {
  //             type: "doc",
  //             label: "Using Windows",
  //             id: "developer-resources/develop-on-windows",
  //           },
  //         ],
  //       },
  //       {
  //         type: "category",
  //         label: "Wallet",
  //         items: [
  //           {
  //             type: "doc",
  //             label: "MetaMask",
  //             id: "developer-resources/testnet-wallet",
  //           },
  //           {
  //             type: "category",
  //             label: "Celo Wallet",
  //             items: [
  //               {
  //                 type: "doc",
  //                 label: "Celo Wallet",
  //                 id: "celo-codebase/wallet/index",
  //               },
  //               {
  //                 type: "doc",
  //                 label: "Running the wallet locally",
  //                 id: "celo-codebase/wallet/intro",
  //               },
  //               {
  //                 type: "doc",
  //                 label: "Using the Wallet",
  //                 id: "getting-started/using-the-wallet",
  //               },
  //             ],
  //           },
  //           {
  //             type: "link",
  //             label: "Faucet",
  //             href: "https://celo.org/developers/faucet",
  //           },
  //         ],
  //       },
  //       {
  //         type: "category",
  //         label: "Tools",
  //         items: [
  //           { type: "doc", label: "Overview", id: "learn/developer-tools" },
  //           {
  //             type: "category",
  //             label: "SDKs",
  //             items: [
  //               {
  //                 type: "category",
  //                 label: "ContractKit",
  //                 items: [
  //                   {
  //                     type: "doc",
  //                     label: "Overview",
  //                     id: "developer-resources/contractkit/index",
  //                   },
  //                   {
  //                     type: "doc",
  //                     label: "Setup",
  //                     id: "developer-resources/contractkit/setup",
  //                   },
  //                   {
  //                     type: "doc",
  //                     label: "Usage",
  //                     id: "developer-resources/contractkit/usage",
  //                   },
  //                   {
  //                     type: "doc",
  //                     label: "Use Web3 from ContracKit",
  //                     id:
  //                       "developer-resources/contractkit/notes-web3-with-contractkit",
  //                   },
  //                   {
  //                     type: "doc",
  //                     label: "Wrappers & Registry Contracts",
  //                     id:
  //                       "developer-resources/contractkit/contracts-wrappers-registry",
  //                   },
  //                   {
  //                     type: "doc",
  //                     label: "Query On-Chain Identifiers with ODIS",
  //                     id: "developer-resources/contractkit/odis",
  //                   },
  //                   {
  //                     type: "doc",
  //                     label: "Migrate to ContractKit v1",
  //                     id:
  //                       "developer-resources/contractkit/migrating-to-contractkit-v1",
  //                   },
  //                   {
  //                     type: "doc",
  //                     label: "Migrate to ContractKit v2",
  //                     id:
  //                       "developer-resources/contractkit/migrating-to-contractkit-v2",
  //                   },
  //                 ],
  //               },
  //               {
  //                 type: "doc",
  //                 label: "use-contractkit",
  //                 id: "developer-resources/use-contractkit",
  //               },
  //               {
  //                 type: "doc",
  //                 label: "Ethers.JS Wrapper",
  //                 id: "developer-resources/ethers-js-wrapper",
  //               },
  //               {
  //                 type: "doc",
  //                 label: "WalletConnect",
  //                 id: "learn/walletconnect",
  //               },
  //               {
  //                 type: "category",
  //                 label: "DAppKit",
  //                 items: [
  //                   {
  //                     type: "doc",
  //                     label: "Overview",
  //                     id: "developer-resources/dappkit/index",
  //                   },
  //                   {
  //                     type: "doc",
  //                     label: "Setup",
  //                     id: "developer-resources/dappkit/setup",
  //                   },
  //                   {
  //                     type: "doc",
  //                     label: "Usage",
  //                     id: "developer-resources/dappkit/usage",
  //                   },
  //                 ],
  //               },
  //               {
  //                 type: "link",
  //                 label: "Command Line",
  //                 href:
  //                   "https://docs.celo.org/command-line-interface/introduction",
  //               },
  //             ],
  //           },
  //           {
  //             type: "category",
  //             label: "Infrastructure",
  //             items: [
  //               {
  //                 type: "link",
  //                 label: "BlockScout",
  //                 href: "https://explorer.celo.org/",
  //               },
  //               {
  //                 type: "link",
  //                 label: "ODIS",
  //                 href:
  //                   "https://docs.celo.org/command-line-interface/introduction",
  //               },
  //               {
  //                 type: "link",
  //                 label: "The Graph",
  //                 href: "https://thegraph.com/en/",
  //               },
  //               {
  //                 type: "link",
  //                 label: "DappLooker",
  //                 href: "https://dapplooker.com/integration/celo",
  //               },
  //               {
  //                 type: "link",
  //                 label: "stats.celo.org",
  //                 href: "https://stats.celo.org/",
  //               },
  //             ],
  //           },
  //           {
  //             type: "category",
  //             label: "Hosted Nodes",
  //             items: [
  //               {
  //                 type: "doc",
  //                 label: "Forno",
  //                 id: "developer-resources/forno/index",
  //               },
  //             ],
  //           },
  //           {
  //             type: "doc",
  //             label: "Development Chain",
  //             id: "developer-resources/walkthroughs/development-chain",
  //           },
  //           {
  //             type: "doc",
  //             label: "Ethereum Tools",
  //             id: "learn/evm-compatible-tooling",
  //           },
  //         ],
  //       },
  //       {
  //         type: "category",
  //         label: "Deploy",
  //         items: [
  //           {
  //             type: "doc",
  //             label: "Overview",
  //             id: "developer-resources/deploy-dapp",
  //           },
  //           {
  //             type: "doc",
  //             label: "Remix",
  //             id: "developer-resources/deploy-remix",
  //           },
  //           {
  //             type: "doc",
  //             label: "Truffle",
  //             id: "developer-resources/deploy-truffle",
  //           },
  //           {
  //             type: "doc",
  //             label: "Hardhat",
  //             id: "developer-resources/deploy-hardhat",
  //           },
  //           {
  //             type: "doc",
  //             label: "Replit",
  //             id: "developer-resources/deploy-replit",
  //           },
  //         ],
  //       },
  //     ],
  //   },
  //   {
  //     type: "category",
  //     label: "Tutorials",
  //     items: [
  //       // { type: "doc", label: "Introduction", id: "developer-resources/start",},
  //       // { type: "doc", label: "Sending CELO & Stable Assets", id: "developer-resources/walkthroughs/hellocelo",},
  //       // { type: "doc", label: "Deploy to a Local Node", id: "developer-resources/walkthroughs/hellocontracts",},
  //       // { type: "doc", label: "Deploy to a Remote Node", id: "developer-resources/walkthroughs/hello-contract-remote-node",},
  //       // "developer-resources/walkthroughs/no-code-erc20",
  //       // "developer-resources/walkthroughs/no-code-erc721",
  //       // "developer-resources/walkthroughs/web-dapp",
  //       // { type: "doc", label: "Use onchain randomness", id: "developer-resources/walkthroughs/randomness",},
  //       // { type: "doc", label: "Valora + Wallet Connect", id: "developer-resources/walkthroughs/valora-wc-v1",},
  //       // { type: "doc", label: "Using Keystores", id: "developer-resources/walkthroughs/using-js-keystores",},
  //       {
  //         type: "link",
  //         label: "Celo Tutorials",
  //         href: "https://docs.celo.org/blog",
  //       },
  //       {
  //         type: "link",
  //         label: "Figment | Celo 101",
  //         href: "https://learn.figment.io/protocols/celo/",
  //       },
  //       {
  //         type: "link",
  //         label: "Dacade | Celo 101",
  //         href: "https://dacade.org/communities/celo-development-101",
  //       },
  //     ],
  //   },
  //   {
  //     type: "category",
  //     label: "From another platform?",
  //     items: [
  //       {
  //         type: "doc",
  //         label: "Ethereum Developers",
  //         id: "developer-resources/celo-for-eth-devs",
  //       },
  //     ],
  //   },
  //   {
  //     type: "link",
  //     label: "SDK Code Reference",
  //     href: "https://celo-sdk-docs.readthedocs.io/",
  //   },
  // ],

  // ######################################
  // Contributors
  // ######################################
  // community: [
  //   {
  //     type: "category",
  //     label: "Community",
  //     items: [
  //       { type: "doc", label: "Overview", id: "community/contributing" },
  //       {
  //         type: "doc",
  //         label: "Developer Events",
  //         id: "community/developer-events",
  //       },
  //       {
  //         type: "doc",
  //         label: "Fundraising",
  //         id: "community/fundraising",
  //       },
  //       {
  //         type: "category",
  //         label: "Ambassadors",
  //         items: [
  //           { type: "doc", label: "Guidelines", id: "community/guidelines" },
  //           { type: "doc", label: "Code", id: "community/code-contributors" },
  //           {
  //             type: "doc",
  //             label: "Translation",
  //             id: "community/translation-contributors",
  //           },
  //           {
  //             type: "doc",
  //             label: "Documentation ",
  //             id: "community/documentation-contributors",
  //           },
  //           {
  //             type: "doc",
  //             label: "Community Improvements",
  //             id: "community/CIP-contributors",
  //           },
  //         ],
  //       },
  //       {
  //         type: "doc",
  //         label: "Code of Conduct",
  //         id: "community/code-of-conduct",
  //       },
  //       {
  //         type: "doc",
  //         label: "Grant Playbook",
  //         id: "community/grant-playbook",
  //       },
  //       {
  //         type: "category",
  //         label: " Release Process",
  //         items: [
  //           {
  //             type: "doc",
  //             label: "Overview",
  //             id: "community/release-process/README",
  //           },
  //           {
  //             type: "doc",
  //             label: "Smart Contracts",
  //             id: "community/release-process/smart-contracts",
  //           },
  //           {
  //             type: "doc",
  //             label: "Blockchain Client",
  //             id: "community/release-process/blockchain-client",
  //           },
  //           {
  //             type: "doc",
  //             label: "CeloCLI and ContractKit",
  //             id:
  //               "community/release-process/base-cli-contractkit-dappkit-utils",
  //           },
  //           {
  //             type: "doc",
  //             label: "Attestation Service",
  //             id: "community/release-process/attestation-service",
  //           },
  //         ],
  //       },
  //       {
  //         type: "category",
  //         label: "Important Information",
  //         items: [
  //           {
  //             type: "doc",
  //             label: "Alfajores Testnet Disclaimer",
  //             id: "important-information/alfajores-testnet-disclaimer",
  //           },
  //           {
  //             type: "doc",
  //             label: "Baklava Testnet Disclaimer",
  //             id: "important-information/baklava-testnet-disclaimer",
  //           },
  //           {
  //             type: "doc",
  //             label: "Mainnet Disclaimer",
  //             id: "important-information/mainnet-network-disclaimer",
  //           },
  //         ],
  //       },
  //       {
  //         type: "category",
  //         label: "Resources",
  //         items: [
  //           // { type: "doc", label: "Celo Onboarding", id: "learn/celo-onboarding", },
  //           // { type: "doc", label: "Developer Onboarding", id: "learn/developer-onboarding", },
  //           {
  //             type: "category",
  //             label: "Quick Guides",
  //             items: [
  //               { type: "doc", label: "Celo", id: "learn/celo-summary" },
  //               {
  //                 type: "doc",
  //                 label: "Celo Protocol",
  //                 id: "learn/celo-protocol-summary",
  //               },
  //               { type: "doc", label: "Valora", id: "learn/valora-summary" },
  //               { type: "doc", label: "CELO", id: "learn/CELO-coin-summary" },
  //               {
  //                 type: "doc",
  //                 label: "Celo Stablecoins",
  //                 id: "learn/platform-native-stablecoins-summary",
  //               },
  //             ],
  //           },
  //           // { type: "doc", label: "Figment Learn", id: "learn/figment-learn", },
  //           {
  //             type: "doc",
  //             label: "Celo Resources",
  //             id: "learn/celo-resources",
  //           },
  //         ],
  //       },
  //     ],
  //   },
  // ],
};
module.exports = sidebars;
