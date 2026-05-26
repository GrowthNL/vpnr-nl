export const metadata = {
  title: 'Admin | vpnr.nl',
  robots: { index: false, follow: false },
}

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  // Geen header/footer — eigen admin-shell
  return <>{children}</>
}
