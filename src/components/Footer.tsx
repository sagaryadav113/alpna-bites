const Footer = () => (
  <footer className="py-10 border-t border-border bg-background">
    <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
      <p className="font-display text-xl font-bold text-gradient-gold">Alpna</p>
      <p className="text-sm text-muted-foreground">
        © {new Date().getFullYear()} Alpna Cafe & Restaurant. All rights reserved.
      </p>
    </div>
  </footer>
);

export default Footer;
