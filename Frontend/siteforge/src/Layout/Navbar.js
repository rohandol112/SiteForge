import React, { useState } from 'react';
import { AppBar, Box, Toolbar, Button, Container, IconButton } from '@/components/ui/';
import { Menu } from 'lucide-react';

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <AppBar position="fixed" className="bg-white/80 backdrop-blur-md border-b border-gray-100">
      <Container maxWidth="xl">
        <Toolbar className="flex justify-between py-4">
          {/* Logo */}
          <div className="flex items-center">
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              SiteForge
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Button variant="ghost" className="text-gray-700 hover:text-blue-600">
              Features
            </Button>
            <Button variant="ghost" className="text-gray-700 hover:text-blue-600">
              Marketplace
            </Button>
            <Button variant="ghost" className="text-gray-700 hover:text-blue-600">
              Pricing
            </Button>
            <Button variant="ghost" className="text-gray-700 hover:text-blue-600">
              Documentation
            </Button>
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <Button variant="ghost" className="text-gray-700">
              Sign In
            </Button>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6">
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <IconButton 
            className="md:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            <Menu className="h-6 w-6 text-gray-700" />
          </IconButton>
        </Toolbar>

        {/* Mobile Menu */}
        {mobileOpen && (
          <Box className="md:hidden p-4 bg-white border-t border-gray-100">
            <div className="flex flex-col gap-4">
              <Button variant="ghost" className="w-full text-left">Features</Button>
              <Button variant="ghost" className="w-full text-left">Marketplace</Button>
              <Button variant="ghost" className="w-full text-left">Pricing</Button>
              <Button variant="ghost" className="w-full text-left">Documentation</Button>
              <Button variant="ghost" className="w-full text-left">Sign In</Button>
              <Button className="w-full bg-blue-600 text-white">Get Started</Button>
            </div>
          </Box>
        )}
      </Container>
    </AppBar>
  );
};

export default Navbar;