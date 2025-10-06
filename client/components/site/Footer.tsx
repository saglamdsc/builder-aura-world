export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-8 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <p className="text-sm text-muted-foreground">© 2025 MagmAI O&G Solutions — From Strata to Data</p>
        <ul className="flex items-center gap-4 text-sm text-muted-foreground">
          <li>
            <a className="hover:text-foreground" href="#about">Hakkımızda</a>
          </li>
          <li>
            <a className="hover:text-foreground" href="#solutions">Çözümler</a>
          </li>
          <li>
            <a className="hover:text-foreground" href="#services">Hizmetler</a>
          </li>
          <li>
            <a className="hover:text-foreground" href="#contact">İletişim</a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
