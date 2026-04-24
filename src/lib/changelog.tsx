export interface ChangelogEntry {
  version: string
  date: string
  type: 'major' | 'minor' | 'patch' | 'security'
  typeLabel: string
  title: string
  description: string
  changes: {
    type: 'added' | 'improved' | 'fixed' | 'deprecated' | 'removed'
    items: string[]
  }[]
}

export const changelog: ChangelogEntry[] = [
  {
    version: '2.4.0',
    date: 'April 18, 2026',
    type: 'minor',
    typeLabel: 'New Feature',
    title: 'Multi-vendor correlation engine',
    description: 'Track how changes in one vendor API cascade across your interconnected stack. When AWS Lambda updates, see the ripple effect on your Stripe integrations.',
    changes: [
      {
        type: 'added',
        items: [
          'Cross-vendor dependency mapping across your connected integrations',
          'Correlation alerts when upstream changes affect downstream vendors',
          'Impact summary showing all repos and services touched by a single change',
        ],
      },
      {
        type: 'improved',
        items: [
          'Vendor health status indicators now show real-time uptime data',
          'Change severity scoring calibrated against your specific tech stack',
        ],
      },
    ],
  },
  {
    version: '2.3.2',
    date: 'April 10, 2026',
    type: 'patch',
    typeLabel: 'Bug Fix',
    title: 'CODEOWNERS routing improvements',
    description: 'Fixed edge cases where CODEOWNERS patterns with special characters weren\'t matching correctly, causing routing to fall back to default owners.',
    changes: [
      {
        type: 'fixed',
        items: [
          'Corrected regex parsing for CODEOWNERS entries with regex special characters',
          'Improved fallback logic when no CODEOWNERS match is found',
          'Reduced false negatives in routing for JavaScript and Python repos by 34%',
        ],
      },
      {
        type: 'improved',
        items: [
          'Added CODEOWNERS validation tool in repo settings to catch issues proactively',
        ],
      },
    ],
  },
  {
    version: '2.3.0',
    date: 'March 28, 2026',
    type: 'minor',
    typeLabel: 'New Feature',
    title: 'Custom severity thresholds per vendor',
    description: 'Set different confidence thresholds for critical vendors versus experimental integrations. Your OpenAI alerts can have stricter controls than your internal dev tools.',
    changes: [
      {
        type: 'added',
        items: [
          'Per-vendor confidence thresholds override the global default setting',
          'Vendor priority tiers: Critical, Standard, and Watch for triage sorting',
          'Scheduled digest emails with vendor-specific summaries',
        ],
      },
      {
        type: 'improved',
        items: [
          'Batch actions now apply across multiple repos simultaneously',
          'Slack notifications include direct links to affected code files',
        ],
      },
    ],
  },
  {
    version: '2.2.1',
    date: 'March 15, 2026',
    type: 'patch',
    typeLabel: 'Bug Fix',
    title: 'Jira project key handling',
    description: 'Resolved issues with Jira project keys containing numbers and special prefixes. Tickets now create successfully for Jira projects using non-standard naming conventions.',
    changes: [
      {
        type: 'fixed',
        items: [
          'Jira project key validation now accepts numeric prefixes (e.g., ENG-123)',
          'Fixed custom field mapping for Jira projects with required fields',
          'Resolved race condition when creating tickets during rapid changelog ingestion',
        ],
      },
    ],
  },
  {
    version: '2.2.0',
    date: 'March 5, 2026',
    type: 'minor',
    typeLabel: 'New Feature',
    title: 'GraphQL schema diff viewer',
    description: 'When vendors publish GraphQL API updates, see side-by-side schema diffs with break/non-break classification. No more guessing which fields are affected.',
    changes: [
      {
        type: 'added',
        items: [
          'Visual schema diff viewer for GraphQL API changes',
          'Field-level impact analysis showing which queries are affected',
          'Deprecated field tracking with migration path suggestions',
        ],
      },
      {
        type: 'improved',
        items: [
          'REST API diff viewer now shows request/response examples for changed endpoints',
          'Faster changelog ingestion with parallel processing for multi-vendor updates',
        ],
      },
    ],
  },
  {
    version: '2.1.0',
    date: 'February 20, 2026',
    type: 'minor',
    typeLabel: 'Improvement',
    title: 'GitHub Apps v2 and fine-grained permissions',
    description: 'Support for GitHub\'s new fine-grained personal access tokens and GitHub Apps with repository-level permissions. Deploy with least privilege by default.',
    changes: [
      {
        type: 'added',
        items: [
          'GitHub Apps v2 configuration with repository-level permission scopes',
          'Fine-grained PAT support for organizations requiring restricted access',
          'Permission audit log showing which repos each token accesses',
        ],
      },
      {
        type: 'deprecated',
        items: [
          'Classic GitHub tokens (non-fine-grained) will require migration by Q3 2026',
        ],
      },
    ],
  },
  {
    version: '2.0.5',
    date: 'February 8, 2026',
    type: 'patch',
    typeLabel: 'Bug Fix',
    title: 'Webhook delivery reliability',
    description: 'Fixed a memory leak in webhook processing that caused delivery failures during high-volume changelog periods. Webhook retry logic now handles 429 rate limits correctly.',
    changes: [
      {
        type: 'fixed',
        items: [
          'Memory leak in webhook processor causing 0.1% failure rate under load',
          'Correct retry logic for GitHub webhooks returning 429 Too Many Requests',
          'Webhook payload now includes changelog source and vendor metadata',
        ],
      },
    ],
  },
  {
    version: '2.0.0',
    date: 'January 25, 2026',
    type: 'major',
    typeLabel: 'Major Release',
    title: 'Policy engine and automated ticket creation',
    description: 'The biggest release yet. Rules-based automation lets you set policies that auto-create tickets for high-confidence changes while routing low-confidence notices to human review.',
    changes: [
      {
        type: 'added',
        items: [
          'Visual policy builder with if/then rule configuration',
          'Auto-ticket creation for changes exceeding confidence threshold',
          'Slack digest mode with daily/weekly summaries versus real-time alerts',
          'Zapier and Make.com integrations for no-code automation workflows',
        ],
      },
      {
        type: 'improved',
        items: [
          'Confidence scoring model retrained on 50,000 more changelog entries',
          'New evidence panel showing matched files, imports, and CODEOWNERS context',
          'Search across all historical changes with full-text filtering',
        ],
      },
      {
        type: 'removed',
        items: [
          'Legacy "notify only" mode deprecated in favor of the new policy engine',
        ],
      },
    ],
  },
  {
    version: '1.9.2',
    date: 'January 10, 2026',
    type: 'patch',
    typeLabel: 'Bug Fix',
    title: 'Shopify Scripts detection accuracy',
    description: 'Improved detection of Shopify Scripts in Ruby and Liquid files. Also fixed false positives when comments contained script-related keywords.',
    changes: [
      {
        type: 'fixed',
        items: [
          'Shopify Scripts detection now parses Ruby Liquid templates accurately',
          'Eliminated false positives from commented-out script references',
          'Corrected file path detection for Shopify apps using custom directory structures',
        ],
      },
    ],
  },
]

export function getChangelogEntry(version: string): ChangelogEntry | undefined {
  return changelog.find(entry => entry.version === version)
}

export const typeColors = {
  major: { bg: 'var(--high-soft)', text: 'var(--high)', label: 'Major' },
  minor: { bg: 'var(--accent-soft)', text: 'var(--accent-2)', label: 'Minor' },
  patch: { bg: 'var(--watch-soft)', text: 'var(--watch)', label: 'Patch' },
  security: { bg: 'var(--lime-soft)', text: 'var(--lime)', label: 'Security' },
} as const

export const changeTypeIcons = {
  added: (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 5v14M5 12h14"/>
    </svg>
  ),
  improved: (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="m18 15-6-6-6 6"/>
    </svg>
  ),
  fixed: (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 6 9 17l-5-5"/>
    </svg>
  ),
  deprecated: (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M10 15v4a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-4"/>
      <line x1="9" x2="15" y1="9" y2="15"/>
      <line x1="15" x2="9" y1="9" y2="15"/>
    </svg>
  ),
  removed: (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14"/>
    </svg>
  ),
} as const

export const changeTypeLabels = {
  added: 'Added',
  improved: 'Improved',
  fixed: 'Fixed',
  deprecated: 'Deprecated',
  removed: 'Removed',
} as const