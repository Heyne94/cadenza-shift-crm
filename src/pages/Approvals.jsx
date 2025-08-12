import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  CheckSquare,
  X,
  Check,
  Clock,
  User,
  Calendar,
  Filter,
  Download
} from 'lucide-react';

const Approvals = () => {
  const [activeTab, setActiveTab] = useState('all');

  // Mock approval data
  const approvals = [
    {
      id: 1,
      type: 'Shift Swap',
      employee: 'Kathryn Murphy',
      details: 'Apr 30-May 2, 2024',
      description: 'Requesting to swap shift with Darrell Steward',
      submitted: 'Apr 26, 2024',
      status: 'pending',
      priority: 'normal'
    },
    {
      id: 2,
      type: 'Time Off',
      employee: 'Shannon Walsh',
      details: 'May 15-17, 2024',
      description: 'Personal vacation request',
      submitted: 'Apr 29, 2024',
      status: 'pending',
      priority: 'normal'
    },
    {
      id: 3,
      type: 'Overtime',
      employee: 'April Johnson',
      details: 'May 1-3, 2024',
      description: 'Additional coverage needed for special event',
      submitted: 'Apr 25, 2024',
      status: 'pending',
      priority: 'low'
    },
    {
      id: 4,
      type: 'Shift Swap',
      employee: 'Daniel Stewart',
      details: 'Apr 18: 8:00 AM - 4:00 PM',
      description: 'Requesting to swap shift with Kathryn Murphy',
      submitted: 'Apr 15, 2024',
      status: 'approved',
      priority: 'normal'
    },
    {
      id: 5,
      type: 'Time Off',
      employee: 'Mike Chen',
      details: 'Apr 20-22, 2024',
      description: 'Family emergency leave',
      submitted: 'Apr 18, 2024',
      status: 'denied',
      priority: 'high'
    }
  ];

  const getStatusStats = () => {
    const pending = approvals.filter(a => a.status === 'pending').length;
    const approved = approvals.filter(a => a.status === 'approved').length;
    const denied = approvals.filter(a => a.status === 'denied').length;
    const total = approvals.length;
    
    return { pending, approved, denied, total };
  };

  const stats = getStatusStats();

  const getStatusColor = (status) => {
    switch (status) {
      case 'approved': return 'bg-green-500 text-white';
      case 'denied': return 'bg-red-500 text-white';
      case 'pending': return 'bg-yellow-500 text-white';
      default: return 'bg-gray-500 text-white';
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'approved': return <Check size={16} />;
      case 'denied': return <X size={16} />;
      case 'pending': return <Clock size={16} />;
      default: return <Clock size={16} />;
    }
  };

  const filteredApprovals = activeTab === 'all' 
    ? approvals 
    : approvals.filter(approval => approval.status === activeTab);

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Approvals</h1>
        <div className="flex items-center space-x-2">
          <Button variant="outline" size="sm">
            <Filter size={16} className="mr-2" />
            Filter
          </Button>
          <Button variant="outline" size="sm">
            <Download size={16} className="mr-2" />
            Export
          </Button>
        </div>
      </div>

      {/* Compact Stats Cards */}
      <div className="grid grid-cols-4 gap-4">
        <Card className="p-4">
          <div className="flex items-center justify-between">
            <div>
              <div className="flex items-center space-x-2">
                <CheckSquare size={16} className="text-muted-foreground" />
                <span className="text-sm font-medium text-muted-foreground">Total</span>
              </div>
              <p className="text-2xl font-bold mt-1">{stats.total}</p>
            </div>
          </div>
        </Card>

        <Card className="p-4">
          <div className="flex items-center justify-between">
            <div>
              <div className="flex items-center space-x-2">
                <Clock size={16} className="text-yellow-500" />
                <span className="text-sm font-medium text-yellow-600">Pending</span>
              </div>
              <p className="text-2xl font-bold mt-1 text-yellow-600">{stats.pending}</p>
            </div>
          </div>
        </Card>

        <Card className="p-4">
          <div className="flex items-center justify-between">
            <div>
              <div className="flex items-center space-x-2">
                <Check size={16} className="text-green-500" />
                <span className="text-sm font-medium text-green-600">Approved</span>
              </div>
              <p className="text-2xl font-bold mt-1 text-green-600">{stats.approved}</p>
            </div>
          </div>
        </Card>

        <Card className="p-4">
          <div className="flex items-center justify-between">
            <div>
              <div className="flex items-center space-x-2">
                <X size={16} className="text-red-500" />
                <span className="text-sm font-medium text-red-600">Denied</span>
              </div>
              <p className="text-2xl font-bold mt-1 text-red-600">{stats.denied}</p>
            </div>
          </div>
        </Card>
      </div>

      {/* Filter Tabs */}
      <div className="flex space-x-1 bg-muted p-1 rounded-lg w-fit">
        {[
          { key: 'all', label: `All (${stats.total})` },
          { key: 'pending', label: `Pending (${stats.pending})` },
          { key: 'approved', label: `Approved (${stats.approved})` },
          { key: 'denied', label: `Denied (${stats.denied})` }
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

      {/* Approvals List */}
      <div className="space-y-4">
        {filteredApprovals.map((approval) => (
          <Card key={approval.id} className="hover:shadow-md transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-3">
                    <Badge className={getStatusColor(approval.status)}>
                      <div className="flex items-center space-x-1">
                        {getStatusIcon(approval.status)}
                        <span className="capitalize">{approval.status}</span>
                      </div>
                    </Badge>
                    <h3 className="text-lg font-semibold">{approval.type}</h3>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                    <div className="flex items-center space-x-2">
                      <User size={16} className="text-muted-foreground" />
                      <span className="text-sm">
                        <span className="text-muted-foreground">Employee:</span> {approval.employee}
                      </span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Calendar size={16} className="text-muted-foreground" />
                      <span className="text-sm">
                        <span className="text-muted-foreground">Details:</span> {approval.details}
                      </span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock size={16} className="text-muted-foreground" />
                      <span className="text-sm">
                        <span className="text-muted-foreground">Submitted:</span> {approval.submitted}
                      </span>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground text-sm mb-4">
                    <span className="font-medium">Description:</span> {approval.description}
                  </p>
                </div>

                {approval.status === 'pending' && (
                  <div className="flex space-x-2 ml-4">
                    <Button size="sm" className="bg-green-500 hover:bg-green-600 text-white">
                      <Check size={16} className="mr-1" />
                      Approve
                    </Button>
                    <Button size="sm" variant="destructive">
                      <X size={16} className="mr-1" />
                      Deny
                    </Button>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredApprovals.length === 0 && (
        <Card>
          <CardContent className="p-12 text-center">
            <CheckSquare size={48} className="mx-auto text-muted-foreground mb-4" />
            <h3 className="text-lg font-medium mb-2">No approvals found</h3>
            <p className="text-muted-foreground">
              {activeTab === 'all' 
                ? 'No approval requests at this time.' 
                : `No ${activeTab} approval requests found.`}
            </p>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default Approvals;

