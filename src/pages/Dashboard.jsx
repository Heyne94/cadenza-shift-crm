import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  Calendar,
  Clock,
  MapPin,
  Users,
  DollarSign,
  CheckSquare,
  AlertTriangle,
  TrendingUp,
  TrendingDown,
  Shield,
  Building,
  Eye,
  BarChart3,
  PieChart
} from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart as RechartsPieChart, Pie, Cell } from 'recharts';

const Dashboard = () => {
  // Mock data for analytics
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
    { name: 'Overtime', value: 20, color: '#F39C12' },
    { name: 'Other', value: 17, color: '#9B59B6' }
  ];

  return (
    <div className="p-6 space-y-6">
      {/* Analytics Section (replacing Weekly Requests) */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Key Analytics Cards */}
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-lg flex items-center space-x-2">
              <BarChart3 size={20} className="text-primary" />
              <span>Analytics Overview</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Total Hours</span>
                <div className="flex items-center space-x-1">
                  <span className="text-lg font-bold">1,420</span>
                  <TrendingUp size={12} className="text-green-500" />
                  <span className="text-xs text-green-600">+12%</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Active Employees</span>
                <div className="flex items-center space-x-1">
                  <span className="text-lg font-bold">24</span>
                  <TrendingUp size={12} className="text-green-500" />
                  <span className="text-xs text-green-600">+2</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Monthly Cost</span>
                <div className="flex items-center space-x-1">
                  <span className="text-lg font-bold">$21,300</span>
                  <TrendingUp size={12} className="text-red-500" />
                  <span className="text-xs text-red-600">+8%</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Schedule - Main Focus Area */}
        <Card className="lg:col-span-2">
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <CardTitle className="text-lg">Schedule</CardTitle>
              <div className="flex items-center space-x-2">
                <span className="text-sm text-muted-foreground">April 19 - 21, 2024</span>
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => window.location.href = '/schedule/auto-schedule'}
                >
                  Auto-Schedule
                </Button>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {/* Time slots with better clarity */}
              <div className="grid grid-cols-4 gap-4 text-sm">
                <div className="font-medium text-muted-foreground">Time</div>
                <div className="font-medium text-muted-foreground">Morning Shift</div>
                <div className="font-medium text-muted-foreground">Evening Shift</div>
                <div className="font-medium text-muted-foreground">Night Shift</div>
              </div>
              
              <div className="grid grid-cols-4 gap-4 py-2 border-b border-border">
                <div className="text-sm text-muted-foreground">6:00 AM - 2:00 PM</div>
                <div className="flex space-x-1">
                  <Badge className="bg-primary text-primary-foreground text-xs">Neil</Badge>
                  <Badge className="bg-primary text-primary-foreground text-xs">Mike</Badge>
                </div>
                <div className="text-sm text-muted-foreground">-</div>
                <div className="text-sm text-muted-foreground">-</div>
              </div>
              
              <div className="grid grid-cols-4 gap-4 py-2 border-b border-border">
                <div className="text-sm text-muted-foreground">2:00 PM - 10:00 PM</div>
                <div className="text-sm text-muted-foreground">-</div>
                <div className="flex space-x-1">
                  <Badge className="bg-primary text-primary-foreground text-xs">Shannon</Badge>
                  <Badge className="bg-primary text-primary-foreground text-xs">Shannon</Badge>
                </div>
                <div className="text-sm text-muted-foreground">-</div>
              </div>
              
              <div className="grid grid-cols-4 gap-4 py-2">
                <div className="text-sm text-muted-foreground">10:00 PM - 6:00 AM</div>
                <div className="text-sm text-muted-foreground">-</div>
                <div className="text-sm text-muted-foreground">-</div>
                <div className="flex space-x-1">
                  <Badge className="bg-primary text-primary-foreground text-xs">Jacob</Badge>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Top Sites and Cost Snapshot */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-lg">Top Sites</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 rounded-lg bg-muted/30">
                <div className="flex items-center space-x-3">
                  <Building size={16} className="text-muted-foreground" />
                  <div>
                    <p className="font-medium">Central Plaza</p>
                    <p className="text-sm text-muted-foreground flex items-center">
                      <MapPin size={12} className="mr-1" />
                      Downtown, City Center
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium">3 requests</p>
                  <Badge style={{ backgroundColor: '#3498DB', color: 'white' }} className="text-xs">High Priority</Badge>
                </div>
              </div>
              
              <div className="flex items-center justify-between p-3 rounded-lg bg-muted/30">
                <div className="flex items-center space-x-3">
                  <Building size={16} className="text-muted-foreground" />
                  <div>
                    <p className="font-medium">Grand Square</p>
                    <p className="text-sm text-muted-foreground flex items-center">
                      <MapPin size={12} className="mr-1" />
                      Business District, North
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium">2 requests</p>
                  <Badge variant="outline" className="text-xs">Medium Priority</Badge>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Enhanced Cost Snapshot */}
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-lg">Cost Snapshot</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Projected Cost</span>
                <span className="text-lg font-bold">$6,500</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Budget</span>
                <span className="text-lg font-bold">$7000</span>
              </div>
              
              {/* Detailed breakdown */}
              <div className="pt-3 border-t border-border space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center space-x-2">
                    <Shield size={14} className="text-primary" />
                    <span>22 Security Officers</span>
                  </div>
                  <span className="font-medium">$5,200</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center space-x-2">
                    <Clock size={14} className="text-warning" />
                    <span>106 Regular Shifts</span>
                  </div>
                  <span className="font-medium">$5,800</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center space-x-2">
                    <AlertTriangle size={14} className="text-danger" />
                    <span>8 Overtime Shifts</span>
                  </div>
                  <span className="font-medium text-danger">$700</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Analytics Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Monthly Trends Chart */}
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-lg">Monthly Trends</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={200}>
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
            <ResponsiveContainer width="100%" height={200}>
              <RechartsPieChart>
                <Pie
                  data={requestTypes}
                  cx="50%"
                  cy="50%"
                  outerRadius={60}
                  fill="#8884d8"
                  dataKey="value"
                  label={({ name, value }) => `${name} ${value}%`}
                >
                  {requestTypes.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </RechartsPieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Employee Records and Weekly Requests */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Compact Employee Records */}
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-lg">Employee Record</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="p-3 rounded-lg bg-muted/30">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-medium">Kathryn Murphy</h4>
                  <Badge variant="outline">Time Off</Badge>
                </div>
                <p className="text-sm text-muted-foreground">
                  May 22, 2024<br />
                  Shift Swap<br />
                  Apr 18: 8:00 AM - 4 PM
                </p>
              </div>
              
              <div className="p-3 rounded-lg bg-muted/30">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-medium">Courtney Henry</h4>
                  <Badge variant="outline">Renewed | Fill</Badge>
                </div>
                <p className="text-sm text-muted-foreground">
                  License 4002<br />
                  May 22, 2024
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Weekly Requests */}
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-lg">Weekly Requests</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="text-center">
                <div className="text-2xl font-bold text-warning">3</div>
                <p className="text-sm text-muted-foreground">pending</p>
              </div>
              
              <div className="space-y-2">
                <div className="flex items-center justify-between p-2 rounded bg-muted/30">
                  <span className="text-sm">Shift Swap - Kathryn Murphy</span>
                  <Badge variant="outline" className="text-xs">Pending</Badge>
                </div>
                <div className="flex items-center justify-between p-2 rounded bg-muted/30">
                  <span className="text-sm">Time Off - Shannon Walsh</span>
                  <Badge variant="outline" className="text-xs">Pending</Badge>
                </div>
                <div className="flex items-center justify-between p-2 rounded bg-muted/30">
                  <span className="text-sm">Overtime - April Johnson</span>
                  <Badge variant="outline" className="text-xs">Pending</Badge>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Approvals Section */}
      <Card>
        <CardHeader className="pb-3">
          <div className="flex items-center justify-between">
            <CardTitle className="text-lg">Approvals</CardTitle>
            <Button variant="ghost" size="sm">
              <Eye size={16} className="mr-2" />
              View
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Approved Request */}
            <div className="p-3 rounded-lg border border-success/20 bg-success/5">
              <div className="flex items-center justify-between mb-2">
                <Badge className="bg-success text-white">Approved</Badge>
                <span className="text-sm text-muted-foreground">Apr 30-May 2</span>
              </div>
              <h4 className="font-medium text-success">Shift Swap</h4>
              <p className="text-sm text-muted-foreground">
                Apr 18: 8:00 AM - 4:00 PM<br />
                by Daniel Stewart
              </p>
            </div>

            {/* Denied Request */}
            <div className="p-3 rounded-lg border border-danger/20 bg-danger/5">
              <div className="flex items-center justify-between mb-2">
                <Badge className="bg-danger text-white">Denied</Badge>
                <span className="text-sm text-muted-foreground">May 15-17</span>
              </div>
              <h4 className="font-medium text-danger">Time Off</h4>
              <p className="text-sm text-muted-foreground">
                Personal vacation request<br />
                by Shannon Walsh
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Dashboard;

