import { useState, useMemo } from "react";
import {
  FluentProvider,
  Button,
  Badge,
  Card,
  CardHeader,
  Text,
  Title1,
  Title2,
  Title3,
  Subtitle1,
  Body1,
  Caption1,
  Input,
  Field,
  Textarea,
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableHeaderCell,
  TableRow,
  MessageBar,
  MessageBarBody,
  MessageBarTitle,
  Switch,
  makeStyles,
  tokens,
  shorthands,
} from "@fluentui/react-components";
import {
  caipLightTheme,
  caipDarkTheme,
  caipGradients,
  caipSemanticTokens,
} from "@lestermarch/caip-fluentui-theme";

const useStyles = makeStyles({
  page: {
    minHeight: "100vh",
    backgroundColor: tokens.colorNeutralBackground2,
    color: tokens.colorNeutralForeground1,
    fontFamily: tokens.fontFamilyBase,
  },
  topBar: {
    position: "sticky",
    top: 0,
    zIndex: 10,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    ...shorthands.padding("12px", "24px"),
    backgroundColor: tokens.colorNeutralBackground1,
    ...shorthands.borderBottom("1px", "solid", tokens.colorNeutralStroke2),
  },
  wordmark: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
    fontWeight: 600,
  },
  wordmarkDot: { width: "24px", height: "24px", borderRadius: "6px" },
  hero: {
    ...shorthands.padding("64px", "24px"),
    color: "#ffffff",
    backgroundColor: "#0B0B0C",
    backgroundImage:
      "radial-gradient(circle at 20% 0%, rgba(76,194,255,.35), transparent 55%), radial-gradient(circle at 90% 100%, rgba(227,0,140,.25), transparent 50%)",
  },
  heroInner: { maxWidth: "1100px", margin: "0 auto" },
  heroGradientRule: {
    height: "4px",
    width: "120px",
    marginBottom: "24px",
    borderRadius: "2px",
  },
  container: {
    maxWidth: "1100px",
    margin: "0 auto",
    ...shorthands.padding("48px", "24px"),
    display: "flex",
    flexDirection: "column",
    gap: "48px",
  },
  section: { display: "flex", flexDirection: "column", gap: "16px" },
  row: { display: "flex", flexWrap: "wrap", gap: "12px", alignItems: "center" },
  grid3: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
    gap: "16px",
  },
  card: { ...shorthands.padding("24px") },
  cardGradientTop: {
    height: "3px",
    marginLeft: "-24px",
    marginRight: "-24px",
    marginTop: "-24px",
    marginBottom: "16px",
  },
  chart: {
    display: "grid",
    gridTemplateColumns: "repeat(7, 1fr)",
    alignItems: "end",
    gap: "12px",
    height: "200px",
    ...shorthands.padding("16px"),
    backgroundColor: tokens.colorNeutralBackground1,
    ...shorthands.border("1px", "solid", tokens.colorNeutralStroke2),
    borderRadius: tokens.borderRadiusLarge,
  },
  bar: { width: "100%", borderRadius: "4px 4px 0 0" },
  swatchGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
    gap: "12px",
  },
  swatch: {
    display: "flex",
    flexDirection: "column",
    gap: "6px",
    ...shorthands.padding("12px"),
    borderRadius: tokens.borderRadiusMedium,
    ...shorthands.border("1px", "solid", tokens.colorNeutralStroke2),
    backgroundColor: tokens.colorNeutralBackground1,
  },
  swatchChip: { height: "48px", borderRadius: "6px" },
  footer: {
    ...shorthands.padding("32px", "24px"),
    color: tokens.colorNeutralForeground2,
    fontSize: "14px",
  },
});

const bars = [12, 22, 18, 30, 28, 36, 42];

export default function App() {
  const [dark, setDark] = useState(false);
  const theme = dark ? caipDarkTheme : caipLightTheme;
  const sem = dark ? caipSemanticTokens.dark : caipSemanticTokens.light;
  const grad = dark ? caipGradients.dark : caipGradients.light;

  return (
    <FluentProvider theme={theme}>
      <Showcase dark={dark} setDark={setDark} sem={sem} grad={grad} />
    </FluentProvider>
  );
}

function Showcase({
  dark,
  setDark,
  sem,
  grad,
}: {
  dark: boolean;
  setDark: (v: boolean) => void;
  sem: typeof caipSemanticTokens.light;
  grad: typeof caipGradients.light;
}) {
  const s = useStyles();
  const palette = useMemo(
    () => [
      { name: "Primary (Cloud Blue)", value: sem.primary },
      { name: "Secondary (Cloud Teal)", value: sem.secondary },
      { name: "Tertiary (AI Pink)", value: sem.tertiary },
      { name: "Warning", value: sem.warning },
      { name: "Error", value: sem.error },
      { name: "Success", value: sem.success },
    ],
    [sem]
  );

  return (
    <div className={s.page}>
      <header className={s.topBar}>
        <div className={s.wordmark}>
          <span className={s.wordmarkDot} style={{ background: grad.cloud }} />
          CAIP Labs · Fluent React showcase
        </div>
        <Switch
          checked={dark}
          onChange={(_, d) => setDark(!!d.checked)}
          label={dark ? "Dark theme" : "Light theme"}
        />
      </header>

      <section className={s.hero}>
        <div className={s.heroInner}>
          <div className={s.heroGradientRule} style={{ background: grad.stroke }} />
          <Title1 style={{ color: "#ffffff", display: "block" }}>
            Fluent UI React · CAIP theme
          </Title1>
          <Body1 style={{ color: "rgba(255,255,255,.78)", display: "block", marginTop: 12 }}>
            A parallel-stack comparison to the govuk-frontend showcase. Same colour decisions,
            different component library and architecture.
          </Body1>
          <div className={s.row} style={{ marginTop: 24 }}>
            <Button appearance="primary">Primary action</Button>
            <Button appearance="outline" style={{ color: "#ffffff", borderColor: "rgba(255,255,255,.5)" }}>
              Secondary
            </Button>
          </div>
        </div>
      </section>

      <main className={s.container}>
        <section className={s.section}>
          <Title2>Components</Title2>
          <MessageBar intent="success">
            <MessageBarBody>
              <MessageBarTitle>Success</MessageBarTitle>
              Your changes have been saved.
            </MessageBarBody>
          </MessageBar>
        </section>

        <section className={s.section}>
          <Title2>Badges</Title2>
          <div className={s.row}>
            <Badge appearance="filled" color="brand">Brand</Badge>
            <Badge appearance="tint" color="brand">Brand tint</Badge>
            <Badge appearance="filled" color="success">Success</Badge>
            <Badge appearance="filled" color="warning">Warning</Badge>
            <Badge appearance="filled" color="danger">Error</Badge>
            <Badge appearance="tint" color="informative">Info</Badge>
          </div>
        </section>

        <section className={s.section}>
          <Title2>Buttons</Title2>
          <div className={s.row}>
            <Button appearance="primary">Primary</Button>
            <Button appearance="outline">Secondary</Button>
            <Button appearance="subtle">Tertiary</Button>
            <Button appearance="primary" disabled>Disabled</Button>
          </div>
        </section>

        <section className={s.section}>
          <Title2>Form inputs</Title2>
          <Field label="Full name" hint="As shown on your ID">
            <Input placeholder="Ada Lovelace" />
          </Field>
          <Field label="Email" required>
            <Input type="email" placeholder="ada@example.com" />
          </Field>
          <Field label="Comments">
            <Textarea rows={4} placeholder="Tell us what you think" />
          </Field>
          <div className={s.row}>
            <Button appearance="primary">Submit</Button>
            <Button appearance="subtle">Cancel</Button>
          </div>
        </section>

        <section className={s.section}>
          <Title2>Cards</Title2>
          <div className={s.grid3}>
            <Card className={s.card}>
              <div className={s.cardGradientTop} style={{ background: grad.cloud }} />
              <CardHeader header={<Subtitle1>Cloud accent</Subtitle1>} />
              <Body1>A neutral surface with a single gradient hairline. Use for hero content.</Body1>
            </Card>
            <Card className={s.card}>
              <CardHeader header={<Subtitle1>Plain surface</Subtitle1>} />
              <Body1>Default elevation. Cards stay neutral so the page reads calm.</Body1>
            </Card>
            <Card className={s.card} style={{ background: tokens.colorNeutralBackground3 }}>
              <CardHeader
                header={<Subtitle1>Raised surface</Subtitle1>}
                action={<Badge appearance="tint" color="brand">New</Badge>}
              />
              <Body1>Slightly raised background with a small accent badge.</Body1>
            </Card>
          </div>
        </section>

        <section className={s.section}>
          <Title2>Table</Title2>
          <Table size="small">
            <TableHeader>
              <TableRow>
                <TableHeaderCell>Region</TableHeaderCell>
                <TableHeaderCell>Status</TableHeaderCell>
                <TableHeaderCell>Latency (ms)</TableHeaderCell>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>UK South</TableCell>
                <TableCell><Badge appearance="filled" color="success">Healthy</Badge></TableCell>
                <TableCell>42</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>West Europe</TableCell>
                <TableCell><Badge appearance="filled" color="warning">Degraded</Badge></TableCell>
                <TableCell>118</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>East US</TableCell>
                <TableCell><Badge appearance="filled" color="danger">Outage</Badge></TableCell>
                <TableCell>—</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </section>

        <section className={s.section}>
          <Title2>Data</Title2>
          <div className={s.chart} aria-label="Weekly requests, illustrative">
            {bars.map((v, i) => {
              const colours = [
                sem.primary, sem.secondary, sem.tertiary,
                sem.warning, sem.primary, sem.secondary, sem.tertiary,
              ];
              return (
                <div
                  key={i}
                  className={s.bar}
                  style={{ height: `${(v / Math.max(...bars)) * 100}%`, background: colours[i] }}
                  title={`Day ${i + 1}: ${v}`}
                />
              );
            })}
          </div>
          <Caption1>Cloud first, AI accents for emphasis. Reserve red for genuine errors.</Caption1>
        </section>

        <section className={s.section}>
          <Title3 as="h2">Palette</Title3>
          <div className={s.swatchGrid}>
            {palette.map((c) => (
              <div key={c.name} className={s.swatch}>
                <div className={s.swatchChip} style={{ background: c.value }} />
                <Text weight="semibold">{c.name}</Text>
                <Caption1 style={{ fontFamily: "Cascadia Mono, Consolas, monospace" }}>
                  {c.value}
                </Caption1>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer className={s.footer}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          Parallel-stack comparison. Source of truth lives in the govuk-frontend repo.
        </div>
      </footer>
    </div>
  );
}
