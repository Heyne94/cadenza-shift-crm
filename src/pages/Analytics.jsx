import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  TrendingUp,
  TrendingDown,
  Users,
  Clock,
  DollarSign,
  FileText,
  Download,
  BarChart3
} from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, BarChart, Bar } from 'recharts';

const Analytics = () => {
  // Mock data for charts
  const monthlyTrends = [
    { month: 'Jan', hours: 1200 },
    { month: 'Feb', hours: 1350 },
    { month: 'Mar', hours: 1180 },
    { month: 'Apr', hours: 1420 },
    { month: 'May', hours: 1380 },
    { month: 'Jun', hours: 1520 }
  ];

  const requestTypes = [
    { name: 'Shift Swaps', value: 35, color: '#3498DB' },
    { name: 'Time Off', value: 28, color: '#2ECC71' },
    { name: 'Schedule Changes', value: 20, color: '#9B59B6' },
    { name: 'Overtime', value: 17, color: '#F39C12' }
  ];

  const employeePerformance = [
    { name: 'John', hours: 180 },
    { name: 'Sarah', hours: 175 },
    { name: 'Mike', hours: 165 },
    { name: 'Lisa', hours: 170 },
    { name: 'Tom', hours: 160 }
  ];

  const costAnalysis = [
    { month: 'Jan', cost: 18000 },
    { month: 'Feb', cost: 19500 },
    { month: 'Mar', cost: 17800 },
    { month: 'Apr', cost: 20200 },
    { month: 'May', cost: 21000 },
    { month: 'Jun', cost: 22500 }
  ];

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Analytics & Reporting</h1>
        <div className="flex items-center space-x-2">
          <Button variant="outline" size="sm">
            <FileText size={16} className="mr-2" />
            Export Report
          </Button>
          <Button size="sm">
            <BarChart3 size={16} className="mr-2" />
            Generate Report
          </Button>
        </div>
      </div>

      {/* Compact KPI Cards with Improved Icons */}
      <div className="grid grid-cols-4 gap-4">
        <Card className="p-4">
          <div className="flex items-center justify-between">
            <div className="flex-1">
              <div className="flex items-center space-x-2 mb-2">
                <Clock size={16} className="text-primary" />
                <span className="text-sm font-medium text-muted-foreground">Total Hours</span>
              </div>
              <p className="text-2xl font-bold">1,420</p>
              <div className="flex items-center space-x-1 mt-1">
                <TrendingUp size={12} className="text-green-500" />
                <span className="text-xs text-green-600 font-medium">+12%</span>
                <span className="text-xs text-muted-foreground">This month</span>
              </div>
            </div>
          </div>
        </Card>

        <Card className="p-4">
          <div className="flex items-center justify-between">
            <div className="flex-1">
              <div className="flex items-center space-x-2 mb-2">
                <Users size={16} className="text-primary" />
                <span className="text-sm font-medium text-muted-foreground">Active Employees</span>
              </div>
              <p className="text-2xl font-bold">24</p>
              <div className="flex items-center space-x-1 mt-1">
                <TrendingUp size={12} className="text-green-500" />
                <span className="text-xs text-green-600 font-medium">+2</span>
                <span className="text-xs text-muted-foreground">Currently active</span>
              </div>
            </div>
          </div>
        </Card>

        <Card className="p-4">
          <div className="flex items-center justify-between">
            <div className="flex-1">
              <div className="flex items-center space-x-2 mb-2">
                <DollarSign size={16} className="text-primary" />
                <span className="text-sm font-medium text-muted-foreground">Monthly Cost</span>
              </div>
              <p className="text-2xl font-bold">$21,300</p>
              <div className="flex items-center space-x-1 mt-1">
                <TrendingUp size={12} className="text-red-500" />
                <span className="text-xs text-red-600 font-medium">+8%</span>
                <span className="text-xs text-muted-foreground">This month</span>
              </div>
            </div>
          </div>
        </Card>

        <Card className="p-4">
          <div className="flex items-center justify-between">
            <div className="flex-1">
              <div className="flex items-center space-x-2 mb-2">
                <FileText size={16} className="text-primary" />
                <span className="text-sm font-medium text-muted-foreground">Requests</span>
              </div>
              <p className="text-2xl font-bold">61</p>
              <div className="flex items-center space-x-1 mt-1">
                <TrendingDown size={12} className="text-green-500" />
                <span className="text-xs text-green-600 font-medium">-5%</span>
                <span className="text-xs text-muted-foreground">This month</span>
              </div>
            </div>
          </div>
        </Card>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Monthly Trends */}
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-lg">Monthly Trends</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={250}>
              <LineChart data={monthlyTrends}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Line 
                  type="monotone" 
                  dataKey="hours" 
                  stroke="#3498DB" 
                  strokeWidth={2}
                  dot={{ fill: '#3498DB', strokeWidth: 2, r: 4 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Request Types Distribution */}
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-lg">Request Types Distribution</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={250}>
              <PieChart>
                <Pie
                  data={requestTypes}
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                  label={({ name, value }) => `${name} ${value}%`}
                >
                  {requestTypes.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Bottom Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Employee Performance */}
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-lg">Employee Performance</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={employeePerformance}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="hours" fill="#3498DB" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Cost Analysis */}
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-lg">Cost Analysis</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={costAnalysis}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip formatter={(value) => [`$${value.toLocaleString()}`, 'Cost']} />
                <Bar dataKey="cost" fill="#2ECC71" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-lg">Performance Summary</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Avg. Hours/Employee</span>
                <span className="font-medium">168 hrs</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Overtime Rate</span>
                <span className="font-medium text-warning">12%</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Efficiency Score</span>
                <span className="font-medium text-green-600">94%</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-lg">Cost Breakdown</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Regular Hours</span>
                <span className="font-medium">$18,200</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Overtime</span>
                <span className="font-medium text-warning">$2,100</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Benefits</span>
                <span className="font-medium">$1,000</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-lg">Trends</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Request Volume</span>
                <div className="flex items-center space-x-1">
                  <TrendingDown size={12} className="text-green-500" />
                  <span className="font-medium text-green-600">-5%</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Cost Growth</span>
                <div className="flex items-center space-x-1">
                  <TrendingUp size={12} className="text-red-500" />
                  <span className="font-medium text-red-600">+8%</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Productivity</span>
                <div className="flex items-center space-x-1">
                  <TrendingUp size={12} className="text-green-500" />
                  <span className="font-medium text-green-600">+3%</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Analytics;

