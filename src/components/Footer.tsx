export function Footer() {
  return (
    <footer className="py-8 border-t border-border/50 bg-background text-center relative z-10">
      <div className="container mx-auto px-4">
        <p className="text-muted-foreground text-sm">
          &copy; {new Date().getFullYear()} Jony Gautam. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
