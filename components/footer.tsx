export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-8 border-t border-border/50 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-32 bg-primary/5" />
      </div>
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-muted-foreground">&copy; {currentYear} Kunj Mori. All rights reserved.</p>
          </div>
          <div>
            <p className="text-muted-foreground text-sm">
              <span className="text-red-500 animate-pulse">❤️</span> 
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
