import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  Search,
  User,
  Calendar,
  Clock,
  Shield,
  Award,
  Phone,
  Mail,
  MapPin,
  Edit,
  Eye,
  Plus
} from 'lucide-react';

const EmployeeRecord = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeTab, setActiveTab] = useState('all');

  // Mock employee data
  const employees = [
    {
      id: 1,
      name: 'Kathryn Murphy',
      position: 'Senior Security Officer',
      department: 'Security',
      status: 'active',
      email: 'kathryn.murphy@company.com',
      phone: '+1 (555) 123-4567',
      location: 'Central Plaza',
      hireDate: '2022-03-15',
      lastShift: 'May 22, 2024',
      shiftType: 'Time Off',
      certifications: ['Security License 4002', 'First Aid Certified', 'CPR Certified'],
      performance: 94,
      hoursThisMonth: 168,
      avatar: '/api/placeholder/40/40'
    },
    {
      id: 2,
      name: 'Courtney Henry',
      position: 'Security Officer',
      department: 'Security',
      status: 'active',
      email: 'courtney.henry@company.com',
      phone: '+1 (555) 234-5678',
      location: 'Grand Square',
      hireDate: '2023-01-10',
      lastShift: 'May 22, 2024',
      shiftType: 'Renewed | Fill',
      certifications: ['Security License 4003', 'First Aid Certified'],
      performance: 89,
      hoursThisMonth: 172,
      avatar: '/api/placeholder/40/40'
    },
    {
      id: 3,
      name: 'Daniel Stewart',
      position: 'Security Supervisor',
      department: 'Security',
      status: 'active',
      email: 'daniel.stewart@company.com',
      phone: '+1 (555) 345-6789',
      location: 'Central Plaza',
      hireDate: '2021-08-20',
      lastShift: 'May 21, 2024',
      shiftType: 'Regular Shift',
      certifications: ['Security License 4001', 'Supervisor Certification', 'First Aid Certified', 'CPR Certified'],
      performance: 97,
      hoursThisMonth: 180,
      avatar: '/api/placeholder/40/40'
    },
    {
      id: 4,
      name: 'Shannon Walsh',
      position: 'Security Officer',
      department: 'Security',
      status: 'on_leave',
      email: 'shannon.walsh@company.com',
      phone: '+1 (555) 456-7890',
      location: 'Business District',
      hireDate: '2022-11-05',
      lastShift: 'May 15, 2024',
      shiftType: 'Personal Leave',
      certifications: ['Security License 4004', 'First Aid Certified'],
      performance: 91,
      hoursThisMonth: 0,
      avatar: '/api/placeholder/40/40'
    },
    {
      id: 5,
      name: 'Mike Chen',
      position: 'Night Security Officer',
      department: 'Security',
      status: 'active',
      email: 'mike.chen@company.com',
      phone: '+1 (555) 567-8901',
      location: 'Central Plaza',
      hireDate: '2023-06-12',
      lastShift: 'May 22, 2024',
      shiftType: 'Night Shift',
      certifications: ['Security License 4005', 'Night Shift Certified'],
      performance: 86,
      hoursThisMonth: 160,
      avatar: '/api/placeholder/40/40'
    }
  ];

  const getEmployeeStats = () => {
    const active = employees.filter(e => e.status === 'active').length;
    const onLeave = employees.filter(e => e.status === 'on_leave').length;
    const total = employees.length;
    const avgPerformance = Math.round(employees.reduce((sum, e) => sum + e.performance, 0) / employees.length);
    
    return { active, onLeave, total, avgPerformance };
  };

  const stats = getEmployeeStats();

  const getStatusColor = (status) => {
    switch (status) {
      case 'active': return 'bg-green-500 text-white';
      case 'on_leave': return 'bg-yellow-500 text-white';
      case 'inactive': return 'bg-red-500 text-white';
      default: return 'bg-gray-500 text-white';
    }
  };

  const getPerformanceColor = (performance) => {
    if (performance >= 95) return 'text-green-600';
    if (performance >= 85) return 'text-blue-600';
    if (performance >= 75) return 'text-yellow-600';
    return 'text-red-600';
  };

  const filteredEmployees = employees.filter(employee => {
    const matchesSearch = employee.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         employee.position.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         employee.location.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesTab = activeTab === 'all' || 
                      (activeTab === 'active' && employee.status === 'active') ||
                      (activeTab === 'on_leave' && employee.status === 'on_leave');
    
    return matchesSearch && matchesTab;
  });

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Employee Records</h1>
        <div className="flex items-center space-x-2">
          <Button variant="outline" size="sm">
            <Eye size={16} className="mr-2" />
            View Reports
          </Button>
          <Button size="sm">
            <Plus size={16} className="mr-2" />
            Add Employee
          </Button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-4 gap-4">
        <Card className="p-4">
          <div className="flex items-center justify-between">
            <div>
              <div className="flex items-center space-x-2">
                <User size={16} className="text-muted-foreground" />
                <span className="text-sm font-medium text-muted-foreground">Total Employees</span>
              </div>
              <p className="text-2xl font-bold mt-1">{stats.total}</p>
            </div>
          </div>
        </Card>

        <Card className="p-4">
          <div className="flex items-center justify-between">
            <div>
              <div className="flex items-center space-x-2">
                <Shield size={16} className="text-green-500" />
                <span className="text-sm font-medium text-green-600">Active</span>
              </div>
              <p className="text-2xl font-bold mt-1 text-green-600">{stats.active}</p>
            </div>
          </div>
        </Card>

        <Card className="p-4">
          <div className="flex items-center justify-between">
            <div>
              <div className="flex items-center space-x-2">
                <Calendar size={16} className="text-yellow-500" />
                <span className="text-sm font-medium text-yellow-600">On Leave</span>
              </div>
              <p className="text-2xl font-bold mt-1 text-yellow-600">{stats.onLeave}</p>
            </div>
          </div>
        </Card>

        <Card className="p-4">
          <div className="flex items-center justify-between">
            <div>
              <div className="flex items-center space-x-2">
                <Award size={16} className="text-primary" />
                <span className="text-sm font-medium text-muted-foreground">Avg Performance</span>
              </div>
              <p className="text-2xl font-bold mt-1">{stats.avgPerformance}%</p>
            </div>
          </div>
        </Card>
      </div>

      {/* Search Bar */}
      <Card className="p-4">
        <div className="relative">
          <Search size={16} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Search employees by name, position, or location..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>
      </Card>

      {/* Filter Tabs */}
      <div className="flex space-x-1 bg-muted p-1 rounded-lg w-fit">
        {[
          { key: 'all', label: `All (${stats.total})` },
          { key: 'active', label: `Active (${stats.active})` },
          { key: 'on_leave', label: `On Leave (${stats.onLeave})` }
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

      {/* Employee Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredEmployees.map((employee) => (
          <Card key={employee.id} className="hover:shadow-md transition-shadow">
            <CardHeader className="pb-3">
              <div className="flex items-start justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <User size={24} className="text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-lg">{employee.name}</CardTitle>
                    <p className="text-sm text-muted-foreground">{employee.position}</p>
                  </div>
                </div>
                <Badge className={getStatusColor(employee.status)}>
                  {employee.status === 'active' ? 'Active' : 'On Leave'}
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center space-x-2 text-sm">
                  <Mail size={14} className="text-muted-foreground" />
                  <span className="text-muted-foreground truncate">{employee.email}</span>
                </div>
                
                <div className="flex items-center space-x-2 text-sm">
                  <Phone size={14} className="text-muted-foreground" />
                  <span className="text-muted-foreground">{employee.phone}</span>
                </div>
                
                <div className="flex items-center space-x-2 text-sm">
                  <MapPin size={14} className="text-muted-foreground" />
                  <span className="text-muted-foreground">{employee.location}</span>
                </div>
                
                <div className="flex items-center space-x-2 text-sm">
                  <Calendar size={14} className="text-muted-foreground" />
                  <span className="text-muted-foreground">Hired: {employee.hireDate}</span>
                </div>
                
                <div className="flex items-center justify-between text-sm pt-2 border-t border-border">
                  <span className="text-muted-foreground">Performance</span>
                  <span className={`font-medium ${getPerformanceColor(employee.performance)}`}>
                    {employee.performance}%
                  </span>
                </div>
                
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Hours This Month</span>
                  <span className="font-medium">{employee.hoursThisMonth}h</span>
                </div>
                
                <div className="pt-2 border-t border-border">
                  <p className="text-sm text-muted-foreground mb-2">Certifications:</p>
                  <div className="flex flex-wrap gap-1">
                    {employee.certifications.slice(0, 2).map((cert, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {cert}
                      </Badge>
                    ))}
                    {employee.certifications.length > 2 && (
                      <Badge variant="outline" className="text-xs">
                        +{employee.certifications.length - 2} more
                      </Badge>
                    )}
                  </div>
                </div>
                
                <div className="flex items-center justify-between pt-3 border-t border-border">
                  <div className="text-sm">
                    <p className="text-muted-foreground">Last Activity:</p>
                    <p className="font-medium">{employee.lastShift}</p>
                    <Badge variant="outline" className="text-xs mt-1">
                      {employee.shiftType}
                    </Badge>
                  </div>
                  
                  <div className="flex space-x-2">
                    <Button variant="ghost" size="sm">
                      <Eye size={14} />
                    </Button>
                    <Button variant="ghost" size="sm">
                      <Edit size={14} />
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredEmployees.length === 0 && (
        <Card>
          <CardContent className="p-12 text-center">
            <User size={48} className="mx-auto text-muted-foreground mb-4" />
            <h3 className="text-lg font-medium mb-2">No employees found</h3>
            <p className="text-muted-foreground">
              {searchTerm 
                ? 'Try adjusting your search terms' 
                : 'No employees match the current filter'}
            </p>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default EmployeeRecord;

