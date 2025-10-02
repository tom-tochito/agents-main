import type { Meta, StoryObj } from "@storybook/react"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
  ListItem,
  NavigationMenuCard,
} from "./navigation-menu"
import { cn } from "~/core/lib/utils"
import {
  FileText,
  BarChart,
  Users,
  Settings,
  CreditCard,
  HelpCircle,
  Code,
  Palette,
  Package,
  Zap,
  Shield,
  Globe,
  Database,
  Cloud,
  Lock,
  Layers,
  Terminal,
  BookOpen,
} from "lucide-react"

const meta: Meta<typeof NavigationMenu> = {
  title: "UI/NavigationMenu",
  component: NavigationMenu,
  parameters: {
    layout: "centered",
  },
}

export default meta
type Story = StoryObj<typeof meta>

// Default Navigation Menu
export const Default: Story = {
  render: () => (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Products</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <a
                    className="from-muted/50 to-muted flex h-full w-full flex-col justify-end rounded-md bg-gradient-to-b p-6 no-underline outline-none select-none focus:shadow-md"
                    href="/"
                  >
                    <div className="mt-4 mb-2 text-lg font-medium">Product Suite</div>
                    <p className="text-muted-foreground text-sm leading-tight">
                      Comprehensive tools for modern development teams
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              <ListItem href="/product-1" title="Analytics">
                Real-time insights and data visualization
              </ListItem>
              <ListItem href="/product-2" title="Automation">
                Streamline workflows with powerful automation
              </ListItem>
              <ListItem href="/product-3" title="Security">
                Enterprise-grade security for your data
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger>Solutions</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
              <ListItem href="/solutions/enterprise" title="Enterprise">
                Scalable solutions for large organizations
              </ListItem>
              <ListItem href="/solutions/startup" title="Startups">
                Fast and flexible tools for growing teams
              </ListItem>
              <ListItem href="/solutions/education" title="Education">
                Special pricing for educational institutions
              </ListItem>
              <ListItem href="/solutions/nonprofit" title="Non-Profit">
                Discounted plans for non-profit organizations
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuLink className={navigationMenuTriggerStyle()}>Pricing</NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  ),
}

// With Icons
export const WithIcons: Story = {
  render: () => (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Features</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2">
              <li>
                <NavigationMenuLink asChild>
                  <a
                    href="/analytics"
                    className="hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground block space-y-1 rounded-md p-3 leading-none no-underline transition-colors outline-none select-none"
                  >
                    <div className="flex items-center gap-2">
                      <BarChart className="h-4 w-4" />
                      <span className="text-sm font-medium">Analytics</span>
                    </div>
                    <p className="text-muted-foreground text-sm">Track performance metrics</p>
                  </a>
                </NavigationMenuLink>
              </li>
              <li>
                <NavigationMenuLink asChild>
                  <a
                    href="/users"
                    className="hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground block space-y-1 rounded-md p-3 leading-none no-underline transition-colors outline-none select-none"
                  >
                    <div className="flex items-center gap-2">
                      <Users className="h-4 w-4" />
                      <span className="text-sm font-medium">Team</span>
                    </div>
                    <p className="text-muted-foreground text-sm">Manage team members</p>
                  </a>
                </NavigationMenuLink>
              </li>
              <li>
                <NavigationMenuLink asChild>
                  <a
                    href="/billing"
                    className="hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground block space-y-1 rounded-md p-3 leading-none no-underline transition-colors outline-none select-none"
                  >
                    <div className="flex items-center gap-2">
                      <CreditCard className="h-4 w-4" />
                      <span className="text-sm font-medium">Billing</span>
                    </div>
                    <p className="text-muted-foreground text-sm">Manage subscriptions</p>
                  </a>
                </NavigationMenuLink>
              </li>
              <li>
                <NavigationMenuLink asChild>
                  <a
                    href="/settings"
                    className="hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground block space-y-1 rounded-md p-3 leading-none no-underline transition-colors outline-none select-none"
                  >
                    <div className="flex items-center gap-2">
                      <Settings className="h-4 w-4" />
                      <span className="text-sm font-medium">Settings</span>
                    </div>
                    <p className="text-muted-foreground text-sm">Configure preferences</p>
                  </a>
                </NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  ),
}

// Documentation Style
export const Documentation: Story = {
  render: () => (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Getting Started</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuCard
                  title="Introduction"
                  description="Start building with our comprehensive guide"
                  icon={<BookOpen className="h-6 w-6" />}
                  href="/docs/introduction"
                />
              </li>
              <ListItem href="/docs/installation" title="Installation">
                Step-by-step installation guide
              </ListItem>
              <ListItem href="/docs/configuration" title="Configuration">
                Configure your environment
              </ListItem>
              <ListItem href="/docs/examples" title="Examples">
                Browse code examples and demos
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger>Components</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
              <ListItem href="/docs/primitives/accordion" title="Accordion">
                A vertically stacked set of interactive headings
              </ListItem>
              <ListItem href="/docs/primitives/alert-dialog" title="Alert Dialog">
                A modal dialog that interrupts the user
              </ListItem>
              <ListItem href="/docs/primitives/avatar" title="Avatar">
                An image element with a fallback
              </ListItem>
              <ListItem href="/docs/primitives/button" title="Button">
                Displays a button or a component
              </ListItem>
              <ListItem href="/docs/primitives/calendar" title="Calendar">
                A date field component for selecting dates
              </ListItem>
              <ListItem href="/docs/primitives/card" title="Card">
                Displays a card with header, content, and footer
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuLink className={navigationMenuTriggerStyle()}>Examples</NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  ),
}

// E-commerce Style
export const Ecommerce: Story = {
  render: () => (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Shop</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-2">
              <li className="col-span-2">
                <NavigationMenuLink asChild>
                  <a
                    className="from-muted/50 to-muted flex h-full w-full flex-col justify-end rounded-md bg-gradient-to-b p-6 no-underline outline-none select-none focus:shadow-md"
                    href="/new-arrivals"
                  >
                    <Zap className="h-6 w-6" />
                    <div className="mt-4 mb-2 text-lg font-medium">New Arrivals</div>
                    <p className="text-muted-foreground text-sm leading-tight">
                      Check out the latest products in our collection
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              <ListItem href="/mens" title="Men's">
                Clothing, shoes, and accessories
              </ListItem>
              <ListItem href="/womens" title="Women's">
                Clothing, shoes, and accessories
              </ListItem>
              <ListItem href="/kids" title="Kids">
                Everything for children
              </ListItem>
              <ListItem href="/sale" title="Sale">
                Up to 50% off selected items
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger>Collections</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[600px] gap-3 p-4 md:grid-cols-3">
              <ListItem href="/summer" title="Summer Collection">
                Light and breezy styles
              </ListItem>
              <ListItem href="/winter" title="Winter Collection">
                Warm and cozy essentials
              </ListItem>
              <ListItem href="/sports" title="Sports & Active">
                Performance wear
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuLink className={navigationMenuTriggerStyle()}>Brands</NavigationMenuLink>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuLink className={navigationMenuTriggerStyle()}>Deals</NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  ),
}

// Developer Platform
export const DeveloperPlatform: Story = {
  render: () => (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Products</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-6 md:w-[500px] lg:w-[700px] lg:grid-cols-3">
              <NavigationMenuCard
                title="API Platform"
                description="Build and scale APIs"
                icon={<Code className="h-6 w-6" />}
                href="/api"
                className="col-span-1"
              />
              <NavigationMenuCard
                title="Design System"
                description="UI components and patterns"
                icon={<Palette className="h-6 w-6" />}
                href="/design"
                className="col-span-1"
              />
              <NavigationMenuCard
                title="Package Registry"
                description="Host and manage packages"
                icon={<Package className="h-6 w-6" />}
                href="/packages"
                className="col-span-1"
              />
              <ListItem href="/database" title="Database">
                Scalable cloud database
              </ListItem>
              <ListItem href="/auth" title="Authentication">
                Secure user authentication
              </ListItem>
              <ListItem href="/storage" title="Storage">
                File and media storage
              </ListItem>
              <ListItem href="/functions" title="Functions">
                Serverless functions
              </ListItem>
              <ListItem href="/edge" title="Edge Network">
                Global CDN and edge computing
              </ListItem>
              <ListItem href="/monitoring" title="Monitoring">
                Real-time monitoring and alerts
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger>Developers</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[500px] gap-3 p-4 md:grid-cols-2">
              <li>
                <NavigationMenuLink asChild>
                  <a
                    href="/docs"
                    className="hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground block space-y-1 rounded-md p-3 leading-none no-underline transition-colors outline-none select-none"
                  >
                    <div className="flex items-center gap-2">
                      <FileText className="h-4 w-4" />
                      <span className="text-sm font-medium">Documentation</span>
                    </div>
                    <p className="text-muted-foreground text-sm">
                      Comprehensive guides and references
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              <li>
                <NavigationMenuLink asChild>
                  <a
                    href="/api-reference"
                    className="hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground block space-y-1 rounded-md p-3 leading-none no-underline transition-colors outline-none select-none"
                  >
                    <div className="flex items-center gap-2">
                      <Terminal className="h-4 w-4" />
                      <span className="text-sm font-medium">API Reference</span>
                    </div>
                    <p className="text-muted-foreground text-sm">Complete API documentation</p>
                  </a>
                </NavigationMenuLink>
              </li>
              <ListItem href="/guides" title="Guides">
                Step-by-step tutorials
              </ListItem>
              <ListItem href="/examples" title="Examples">
                Sample projects and demos
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger>Resources</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4">
              <ListItem href="/blog" title="Blog">
                Latest news and updates
              </ListItem>
              <ListItem href="/community" title="Community">
                Join our developer community
              </ListItem>
              <ListItem href="/support" title="Support">
                Get help from our team
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuLink className={navigationMenuTriggerStyle()}>Pricing</NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  ),
}

// Enterprise Platform
export const EnterprisePlatform: Story = {
  render: () => (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Platform</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-6 md:w-[500px] lg:w-[600px] lg:grid-cols-2">
              <li className="col-span-2">
                <NavigationMenuLink asChild>
                  <a
                    className="from-muted/50 to-muted flex h-full w-full flex-col justify-end rounded-md bg-gradient-to-b p-6 no-underline outline-none select-none focus:shadow-md"
                    href="/platform"
                  >
                    <Layers className="h-6 w-6" />
                    <div className="mt-4 mb-2 text-lg font-medium">Enterprise Platform</div>
                    <p className="text-muted-foreground text-sm leading-tight">
                      Complete solution for enterprise-scale operations
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              <li>
                <NavigationMenuLink asChild>
                  <a
                    href="/infrastructure"
                    className="hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground block space-y-1 rounded-md p-3 leading-none no-underline transition-colors outline-none select-none"
                  >
                    <div className="flex items-center gap-2">
                      <Database className="h-4 w-4" />
                      <span className="text-sm font-medium">Infrastructure</span>
                    </div>
                    <p className="text-muted-foreground text-sm">Scalable cloud infrastructure</p>
                  </a>
                </NavigationMenuLink>
              </li>
              <li>
                <NavigationMenuLink asChild>
                  <a
                    href="/security"
                    className="hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground block space-y-1 rounded-md p-3 leading-none no-underline transition-colors outline-none select-none"
                  >
                    <div className="flex items-center gap-2">
                      <Shield className="h-4 w-4" />
                      <span className="text-sm font-medium">Security</span>
                    </div>
                    <p className="text-muted-foreground text-sm">Enterprise-grade security</p>
                  </a>
                </NavigationMenuLink>
              </li>
              <li>
                <NavigationMenuLink asChild>
                  <a
                    href="/compliance"
                    className="hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground block space-y-1 rounded-md p-3 leading-none no-underline transition-colors outline-none select-none"
                  >
                    <div className="flex items-center gap-2">
                      <Lock className="h-4 w-4" />
                      <span className="text-sm font-medium">Compliance</span>
                    </div>
                    <p className="text-muted-foreground text-sm">SOC2, GDPR, HIPAA compliant</p>
                  </a>
                </NavigationMenuLink>
              </li>
              <li>
                <NavigationMenuLink asChild>
                  <a
                    href="/global"
                    className="hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground block space-y-1 rounded-md p-3 leading-none no-underline transition-colors outline-none select-none"
                  >
                    <div className="flex items-center gap-2">
                      <Globe className="h-4 w-4" />
                      <span className="text-sm font-medium">Global Network</span>
                    </div>
                    <p className="text-muted-foreground text-sm">Worldwide data centers</p>
                  </a>
                </NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger>Solutions</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[600px] gap-3 p-4 md:grid-cols-3">
              <ListItem href="/finance" title="Financial Services">
                Banking and fintech solutions
              </ListItem>
              <ListItem href="/healthcare" title="Healthcare">
                HIPAA-compliant healthcare platform
              </ListItem>
              <ListItem href="/retail" title="Retail">
                E-commerce and retail solutions
              </ListItem>
              <ListItem href="/government" title="Government">
                Secure government cloud
              </ListItem>
              <ListItem href="/education" title="Education">
                Educational technology platform
              </ListItem>
              <ListItem href="/manufacturing" title="Manufacturing">
                Industry 4.0 solutions
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger>Services</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4">
              <ListItem href="/consulting" title="Consulting">
                Expert guidance and strategy
              </ListItem>
              <ListItem href="/implementation" title="Implementation">
                End-to-end deployment services
              </ListItem>
              <ListItem href="/support" title="24/7 Support">
                Round-the-clock enterprise support
              </ListItem>
              <ListItem href="/training" title="Training">
                Comprehensive training programs
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuLink className={navigationMenuTriggerStyle()}>
            Contact Sales
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  ),
}

// Simple Links
export const SimpleLinks: Story = {
  render: () => (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuLink className={navigationMenuTriggerStyle()}>Home</NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink className={navigationMenuTriggerStyle()}>About</NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink className={navigationMenuTriggerStyle()}>Services</NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink className={navigationMenuTriggerStyle()}>
            Portfolio
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink className={navigationMenuTriggerStyle()}>Contact</NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  ),
}
