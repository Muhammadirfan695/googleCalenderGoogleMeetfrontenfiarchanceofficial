import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import {
  Bell,
  Settings,
  User,
  Search,
  Home,
  FileText,
  Users,
  Building2,
  Target,
  ClipboardList,
  Calendar,
  Menu,
  LogOut,
  MoreHorizontal,
} from "lucide-react"

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="flex items-center justify-between px-6 py-3 bg-[#2F4F4F] text-white border-b border-white/10">
        <div className="flex items-center gap-6">
          <h1 className="text-xl font-bold tracking-wide">FAIRFORCE</h1>
          <div className="relative">
            <div className="flex items-center bg-white/10 rounded-md">
              <Input
                type="search"
                placeholder="Search"
                className="w-64 pl-10 bg-transparent border-none text-white placeholder:text-gray-400 focus:ring-0"
              />
              <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
            </div>
          </div>
        </div>
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="sm" className="text-white hover:bg-white/10">
              14 days Free Trial
            </Button>
            <span className="text-gray-400">|</span>
            <Button variant="ghost" size="sm" className="font-semibold text-white hover:bg-white/10">
              UPGRADE
            </Button>
          </div>
          <div className="flex items-center gap-4">
            <Bell className="h-5 w-5 text-gray-300 hover:text-white cursor-pointer" />
            <Settings className="h-5 w-5 text-gray-300 hover:text-white cursor-pointer" />
            <User className="h-5 w-5 text-gray-300 hover:text-white cursor-pointer" />
          </div>
        </div>
      </header>

      <div className="flex h-[calc(100vh-4rem)]">
        {/* Sidebar */}
        <aside className="w-[240px] bg-[#2F4F4F] text-white py-4">
          <nav className="space-y-1">
            {[
              { name: "HOME", icon: Home, active: true },
              { name: "LEAD", icon: FileText },
              { name: "CONTACT", icon: Users },
              { name: "COMPANY", icon: Building2 },
              { name: "POTENTIAL", icon: Target },
              { name: "TASK", icon: ClipboardList },
              { name: "MEETING", icon: Calendar },
            ].map((item) => (
              <a
                key={item.name}
                href="#"
                className={`flex items-center px-6 py-2.5 transition-colors ${
                  item.active ? "bg-white/10" : "hover:bg-white/10"
                }`}
              >
                <item.icon className="h-4 w-4 mr-3" />
                <span className="text-sm font-medium">{item.name}</span>
              </a>
            ))}
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-8 bg-[#f8f9fa] overflow-auto">
          <div className="max-w-7xl mx-auto">
            <div className="flex justify-between items-center mb-6">
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Hello, ABC</h1>
                <p className="text-gray-600">This is what happening in your CRM this month</p>
              </div>
              <div className="flex gap-2">
                <Button variant="outline" className="text-sm">
                  ABC's Home
                </Button>
                <Button variant="outline" className="text-sm">
                  This Month
                </Button>
              </div>
            </div>

            {/* Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
              {[
                { title: "My Open Potential", value: "12" },
                { title: "My Untouched Potential", value: "10" },
                { title: "My Calls Today", value: "01" },
                { title: "My Leads", value: "78" },
              ].map((metric) => (
                <Card key={metric.title} className="shadow-sm">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <p className="text-sm text-gray-600">{metric.title}</p>
                      <p className="text-2xl font-bold mt-1">{metric.value}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Tables */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between">
                  <CardTitle className="text-lg font-semibold">My Meeting</CardTitle>
                  <MoreHorizontal className="h-5 w-5 text-gray-400" />
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Title</TableHead>
                        <TableHead>From</TableHead>
                        <TableHead>Related to</TableHead>
                        <TableHead>To</TableHead>
                        <TableHead>Contact Name</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell className="text-blue-600">Demo</TableCell>
                        <TableCell>02/29/2024</TableCell>
                        <TableCell>Printing Dimensions</TableCell>
                        <TableCell>02/29/2024 10:45 AM</TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <div className="w-6 h-6 rounded-full bg-gray-200" />
                            <span>John Doe</span>
                          </div>
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between">
                  <CardTitle className="text-lg font-semibold">My Open Task</CardTitle>
                  <MoreHorizontal className="h-5 w-5 text-gray-400" />
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Subject</TableHead>
                        <TableHead>Due Date</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Priority</TableHead>
                        <TableHead>Contact Name</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell className="text-blue-600">Register for webinar 2024</TableCell>
                        <TableCell>03/25/2024</TableCell>
                        <TableCell>Not Started</TableCell>
                        <TableCell>Low</TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <div className="w-6 h-6 rounded-full bg-gray-200" />
                            <span>Jane Smith</span>
                          </div>
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

