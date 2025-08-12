import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Download,
  FileText,
  Mail,
  CheckCircle,
  Settings as SettingsIcon,
  User,
  Bell,
  Shield,
  Database
} from 'lucide-react';

const Settings = () => {
  const [exportStatus, setExportStatus] = useState(null);

  const handleExportSchedule = () => {
    setExportStatus('exporting');
    
    // Simulate export process
    setTimeout(() => {
      setExportStatus('sent');
      setTimeout(() => {
        setExportStatus(null);
      }, 3000);
    }, 2000);
  };

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Settings</h1>
          <p className="text-muted-foreground">Manage your CRM preferences and export data</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Export & Reports */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <FileText size={20} />
              <span>Export & Reports</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                <div>
                  <p className="font-medium">Schedule Export</p>
                  <p className="text-sm text-muted-foreground">Export current week schedule as PDF</p>
                </div>
                <Button 
                  onClick={handleExportSchedule}
                  disabled={exportStatus === 'exporting'}
                  className="flex items-center space-x-2"
                >
                  {exportStatus === 'exporting' ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                      <span>Exporting...</span>
                    </>
                  ) : exportStatus === 'sent' ? (
                    <>
                      <CheckCircle size={16} />
                      <span>Sent!</span>
                    </>
                  ) : (
                    <>
                      <Download size={16} />
                      <span>Export</span>
                    </>
                  )}
                </Button>
              </div>

              {exportStatus === 'sent' && (
                <div className="flex items-center space-x-2 p-3 bg-green-50 border border-green-200 rounded-lg">
                  <Mail size={16} className="text-green-600" />
                  <span className="text-sm text-green-800">
                    <strong>schedule.pdf</strong> has been sent to your email
                  </span>
                </div>
              )}

              <div className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                <div>
                  <p className="font-medium">Employee Records Export</p>
                  <p className="text-sm text-muted-foreground">Export all employee data as CSV</p>
                </div>
                <Button variant="outline">
                  <Download size={16} className="mr-2" />
                  Export CSV
                </Button>
              </div>

              <div className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                <div>
                  <p className="font-medium">Analytics Report</p>
                  <p className="text-sm text-muted-foreground">Generate monthly analytics report</p>
                </div>
                <Button variant="outline">
                  <Download size={16} className="mr-2" />
                  Generate
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Account Settings */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <User size={20} />
              <span>Account Settings</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                <div>
                  <p className="font-medium">Profile Information</p>
                  <p className="text-sm text-muted-foreground">Update your personal details</p>
                </div>
                <Button variant="outline">Edit</Button>
              </div>

              <div className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                <div>
                  <p className="font-medium">Password</p>
                  <p className="text-sm text-muted-foreground">Change your account password</p>
                </div>
                <Button variant="outline">Change</Button>
              </div>

              <div className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                <div>
                  <p className="font-medium">Two-Factor Authentication</p>
                  <p className="text-sm text-muted-foreground">Add extra security to your account</p>
                </div>
                <Badge variant="outline" className="bg-green-50 text-green-700">
                  Enabled
                </Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Notification Settings */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Bell size={20} />
              <span>Notifications</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                <div>
                  <p className="font-medium">Email Notifications</p>
                  <p className="text-sm text-muted-foreground">Receive updates via email</p>
                </div>
                <Badge className="bg-primary text-primary-foreground">
                  Enabled
                </Badge>
              </div>

              <div className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                <div>
                  <p className="font-medium">Push Notifications</p>
                  <p className="text-sm text-muted-foreground">Browser push notifications</p>
                </div>
                <Badge variant="outline">
                  Disabled
                </Badge>
              </div>

              <div className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                <div>
                  <p className="font-medium">SMS Alerts</p>
                  <p className="text-sm text-muted-foreground">Critical alerts via SMS</p>
                </div>
                <Badge className="bg-primary text-primary-foreground">
                  Enabled
                </Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* System Settings */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Database size={20} />
              <span>System</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                <div>
                  <p className="font-medium">Data Backup</p>
                  <p className="text-sm text-muted-foreground">Last backup: 2 hours ago</p>
                </div>
                <Button variant="outline">
                  Backup Now
                </Button>
              </div>

              <div className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                <div>
                  <p className="font-medium">System Logs</p>
                  <p className="text-sm text-muted-foreground">View system activity logs</p>
                </div>
                <Button variant="outline">
                  View Logs
                </Button>
              </div>

              <div className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                <div>
                  <p className="font-medium">API Access</p>
                  <p className="text-sm text-muted-foreground">Manage API keys and integrations</p>
                </div>
                <Button variant="outline">
                  Manage
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Settings;

