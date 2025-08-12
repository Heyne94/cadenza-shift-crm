import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  Search,
  Settings,
  Download,
  Star,
  Users,
  Calendar,
  Clock,
  Shield,
  BarChart3,
  Zap,
  AlertCircle
} from 'lucide-react';

const Plugins = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeTab, setActiveTab] = useState('installed');

  // Mock plugin data
  const plugins = [
    {
      id: 1,
      name: 'Compliance Tracker',
      category: 'Compliance',
      description: 'Track employee certifications and compliance requirements',
      version: 'v2.1.0',
      rating: 4.8,
      downloads: 1250,
      lastUpdated: '2024-04-15',
      status: 'installed',
      icon: Shield,
      hasUpdate: false
    },
    {
      id: 2,
      name: 'Advanced Scheduling',
      category: 'Scheduling',
      description: 'AI-powered scheduling optimization and conflict resolution',
      version: 'v1.5.2',
      rating: 4.9,
      downloads: 2100,
      lastUpdated: '2024-04-10',
      status: 'installed',
      icon: Calendar,
      hasUpdate: false
    },
    {
      id: 3,
      name: 'Time Tracking Pro',
      category: 'Time Management',
      description: 'Detailed time tracking with GPS verification',
      version: 'v3.0.1',
      rating: 4.7,
      downloads: 890,
      lastUpdated: '2024-04-08',
      status: 'installed',
      icon: Clock,
      hasUpdate: true
    },
    {
      id: 4,
      name: 'Payroll Integration',
      category: 'Finance',
      description: 'Seamless integration with popular payroll systems',
      version: 'v1.2.3',
      rating: 4.6,
      downloads: 1580,
      lastUpdated: '2024-04-12',
      status: 'available',
      icon: BarChart3,
      hasUpdate: false
    },
    {
      id: 5,
      name: 'Performance Analytics',
      category: 'Analytics',
      description: 'Advanced analytics and reporting for employee performance',
      version: 'v2.0.0',
      rating: 4.8,
      downloads: 950,
      lastUpdated: '2024-04-14',
      status: 'available',
      icon: BarChart3,
      hasUpdate: false
    },
    {
      id: 6,
      name: 'Mobile Notifications',
      category: 'Communication',
      description: 'Push notifications and mobile alerts for employees',
      version: 'v1.8.0',
      rating: 4.5,
      downloads: 2200,
      lastUpdated: '2024-04-11',
      status: 'available',
      icon: Zap,
      hasUpdate: false
    }
  ];

  const getPluginStats = () => {
    const installed = plugins.filter(p => p.status === 'installed').length;
    const available = plugins.filter(p => p.status === 'available').length;
    const hasUpdates = plugins.filter(p => p.hasUpdate).length;
    const total = plugins.length;
    
    return { installed, available, hasUpdates, total };
  };

  const stats = getPluginStats();

  const filteredPlugins = plugins.filter(plugin => {
    const matchesSearch = plugin.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         plugin.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         plugin.category.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesTab = activeTab === 'all' || 
                      (activeTab === 'installed' && plugin.status === 'installed') ||
                      (activeTab === 'available' && plugin.status === 'available') ||
                      (activeTab === 'updates' && plugin.hasUpdate);
    
    return matchesSearch && matchesTab;
  });

  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    
    return (
      <div className="flex items-center space-x-1">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            size={12}
            className={i < fullStars ? 'text-yellow-400 fill-current' : 'text-gray-300'}
          />
        ))}
        <span className="text-sm text-muted-foreground ml-1">{rating}</span>
      </div>
    );
  };

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Plugins</h1>
        <div className="flex items-center space-x-2">
          <Button variant="outline" size="sm">
            Manage Subscriptions
          </Button>
          <Button size="sm">
            Browse Store
          </Button>
        </div>
      </div>

      {/* Compact Stats Cards */}
      <div className="grid grid-cols-4 gap-4">
        <Card className="p-4">
          <div className="flex items-center justify-between">
            <div>
              <div className="flex items-center space-x-2">
                <Settings size={16} className="text-muted-foreground" />
                <span className="text-sm font-medium text-muted-foreground">Active Plugins</span>
              </div>
              <p className="text-2xl font-bold mt-1 text-green-600">{stats.installed}</p>
            </div>
          </div>
        </Card>

        <Card className="p-4">
          <div className="flex items-center justify-between">
            <div>
              <div className="flex items-center space-x-2">
                <Download size={16} className="text-muted-foreground" />
                <span className="text-sm font-medium text-muted-foreground">Total Installed</span>
              </div>
              <p className="text-2xl font-bold mt-1">{stats.total}</p>
            </div>
          </div>
        </Card>

        <Card className="p-4">
          <div className="flex items-center justify-between">
            <div>
              <div className="flex items-center space-x-2">
                <Star size={16} className="text-muted-foreground" />
                <span className="text-sm font-medium text-muted-foreground">Available</span>
              </div>
              <p className="text-2xl font-bold mt-1">{stats.available}</p>
            </div>
          </div>
        </Card>

        <Card className="p-4">
          <div className="flex items-center justify-between">
            <div>
              <div className="flex items-center space-x-2">
                <AlertCircle size={16} className="text-red-500" />
                <span className="text-sm font-medium text-red-600">Updates Available</span>
                {stats.hasUpdates > 0 && (
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                )}
              </div>
              <p className="text-2xl font-bold mt-1 text-red-600">{stats.hasUpdates}</p>
            </div>
          </div>
        </Card>
      </div>

      {/* Compact Search Bar */}
      <Card className="p-4">
        <div className="relative">
          <Search size={16} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Search plugins..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>
      </Card>

      {/* Filter Tabs */}
      <div className="flex space-x-1 bg-muted p-1 rounded-lg w-fit">
        {[
          { key: 'installed', label: `Installed (${stats.installed})` },
          { key: 'available', label: `Plugin Store (${stats.available})` },
          { key: 'updates', label: `Updates (${stats.hasUpdates})` },
          { key: 'all', label: `All (${stats.total})` }
        ].map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
              activeTab === tab.key
                ? 'bg-background text-foreground shadow-sm'
                : 'text-muted-foreground hover:text-foreground'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Plugins Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredPlugins.map((plugin) => {
          const Icon = plugin.icon;
          return (
            <Card key={plugin.id} className="hover:shadow-md transition-shadow">
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Icon size={20} className="text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-lg">{plugin.name}</CardTitle>
                      <p className="text-sm text-muted-foreground">{plugin.category}</p>
                    </div>
                  </div>
                  {plugin.hasUpdate && (
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  )}
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                  {plugin.description}
                </p>
                
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Version</span>
                    <span className="font-medium">{plugin.version}</span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Rating</span>
                    {renderStars(plugin.rating)}
                  </div>
                  
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Downloads</span>
                    <span className="font-medium">{plugin.downloads.toLocaleString()}</span>
                  </div>
                  
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Last updated</span>
                    <span className="font-medium">{plugin.lastUpdated}</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between mt-4 pt-4 border-t border-border">
                  <Badge variant={plugin.status === 'installed' ? 'default' : 'secondary'}>
                    {plugin.status === 'installed' ? 'Active' : 'Available'}
                  </Badge>
                  
                  <div className="flex space-x-2">
                    {plugin.status === 'installed' ? (
                      <>
                        <Button variant="ghost" size="sm">
                          <Settings size={14} />
                        </Button>
                        {plugin.hasUpdate && (
                          <Button size="sm" className="bg-red-500 hover:bg-red-600 text-white">
                            Update
                          </Button>
                        )}
                      </>
                    ) : (
                      <Button size="sm">
                        <Download size={14} className="mr-1" />
                        Install
                      </Button>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {filteredPlugins.length === 0 && (
        <Card>
          <CardContent className="p-12 text-center">
            <Settings size={48} className="mx-auto text-muted-foreground mb-4" />
            <h3 className="text-lg font-medium mb-2">No plugins found</h3>
            <p className="text-muted-foreground">
              {searchTerm 
                ? 'Try adjusting your search terms' 
                : 'No plugins match the current filter'}
            </p>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default Plugins;

