import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  Bot,
  Calendar,
  Users,
  DollarSign,
  ArrowLeft,
  Sparkles,
  MapPin,
  Clock,
  User,
  CheckCircle,
  TrendingUp,
  TrendingDown,
  Edit3,
  Target
} from 'lucide-react';
import { Link } from 'react-router-dom';

const AutoSchedule = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  // Mock data for AI-generated schedule proposals with calendar format
  const scheduleProposals = [
    {
      id: 1,
      title: 'Option 1',
      cost: 8300,
      budget: 7000,
      efficiency: 'High',
      coverage: '98%',
      matchRate: 85,
      assignedPersonnel: 19,
      totalPersonnel: 22,
      mismatchedAssignments: [
        { name: 'Mike', requested: 'Morning', assigned: 'Evening' },
        { name: 'Daniel', requested: 'Evening', assigned: 'Night' },
        { name: 'April', requested: 'Night', assigned: 'Morning' }
      ],
      schedule: {
        'Monday': {
          morning: ['Neil', 'Emma'],
          evening: ['Mike', 'Shannon'],
          night: ['Jacob']
        },
        'Tuesday': {
          morning: ['Shannon', 'Daniel'],
          evening: ['Neil', 'Ruth'],
          night: ['Jacob', 'Michael']
        },
        'Wednesday': {
          morning: ['Emma', 'Michle'],
          evening: ['Shannon', 'Sophia'],
          night: ['Jacob']
        },
        'Thursday': {
          morning: ['Daniel', 'Mike'],
          evening: ['Neil', 'Emma'],
          night: ['Jacob', 'Shannon']
        },
        'Friday': {
          morning: ['Shannon', 'Ruth'],
          evening: ['Daniel', 'Mike'],
          night: ['Jacob']
        },
        'Saturday': {
          morning: ['Emma', 'Michle'],
          evening: ['Neil', 'Shannon'],
          night: ['Jacob', 'Michael']
        },
        'Sunday': {
          morning: ['Mike', 'Daniel'],
          evening: ['Emma', 'Sophia'],
          night: ['Jacob']
        }
      }
    },
    {
      id: 2,
      title: 'Option 2',
      cost: 6800,
      budget: 7000,
      efficiency: 'Maximum',
      coverage: '100%',
      matchRate: 95,
      assignedPersonnel: 21,
      totalPersonnel: 22,
      mismatchedAssignments: [
        { name: 'Courtney', requested: 'Evening', assigned: 'Morning' }
      ],
      schedule: {
        'Monday': {
          morning: ['Neil', 'Mike', 'Emma'],
          evening: ['Shannon', 'Daniel'],
          night: ['Jacob']
        },
        'Tuesday': {
          morning: ['Shannon', 'Ruth'],
          evening: ['Mike', 'Sophia'],
          night: ['Jacob', 'Daniel']
        },
        'Wednesday': {
          morning: ['Neil', 'Emma'],
          evening: ['Shannon', 'Michael'],
          night: ['Jacob']
        },
        'Thursday': {
          morning: ['Daniel', 'Mike', 'Courtney'],
          evening: ['Neil', 'Shannon'],
          night: ['Jacob', 'Emma']
        },
        'Friday': {
          morning: ['Shannon', 'Ruth'],
          evening: ['Daniel', 'Mike', 'Sophia'],
          night: ['Jacob']
        },
        'Saturday': {
          morning: ['Emma', 'Neil'],
          evening: ['Shannon', 'Michael'],
          night: ['Jacob', 'Daniel']
        },
        'Sunday': {
          morning: ['Mike', 'Daniel'],
          evening: ['Emma', 'Shannon'],
          night: ['Jacob']
        }
      }
    },
    {
      id: 3,
      title: 'Option 3',
      cost: 7200,
      budget: 7000,
      efficiency: 'Balanced',
      coverage: '95%',
      matchRate: 77,
      assignedPersonnel: 17,
      totalPersonnel: 22,
      mismatchedAssignments: [
        { name: 'Mike', requested: 'Morning', assigned: 'Evening' },
        { name: 'Daniel', requested: 'Evening', assigned: 'Night' },
        { name: 'April', requested: 'Night', assigned: 'Morning' },
        { name: 'Kathryn', requested: 'Morning', assigned: 'Evening' },
        { name: 'Courtney', requested: 'Evening', assigned: 'Night' }
      ],
      schedule: {
        'Monday': {
          morning: ['Neil', 'Emma'],
          evening: ['Mike', 'Kathryn'],
          night: ['Jacob']
        },
        'Tuesday': {
          morning: ['Shannon', 'Daniel'],
          evening: ['Neil'],
          night: ['Jacob', 'Courtney']
        },
        'Wednesday': {
          morning: ['Emma'],
          evening: ['Shannon', 'Mike'],
          night: ['Jacob']
        },
        'Thursday': {
          morning: ['Daniel', 'Neil'],
          evening: ['Shannon'],
          night: ['Jacob', 'April']
        },
        'Friday': {
          morning: ['Shannon', 'Emma'],
          evening: ['Daniel', 'Mike'],
          night: ['Jacob']
        },
        'Saturday': {
          morning: ['Neil'],
          evening: ['Shannon', 'Emma'],
          night: ['Jacob', 'Daniel']
        },
        'Sunday': {
          morning: ['Mike', 'Daniel'],
          evening: ['Emma'],
          night: ['Jacob']
        }
      }
    }
  ];

  // Mock data for shift requests from personnel
  const shiftRequests = [
    { name: 'Neil', requests: ['Monday Morning', 'Wednesday Morning', 'Saturday Evening'], location: 'Central Plaza', priority: 'High' },
    { name: 'Mike', requests: ['Monday Morning', 'Tuesday Evening', 'Thursday Morning'], location: 'Grand Square', priority: 'Medium' },
    { name: 'Shannon', requests: ['Tuesday Morning', 'Wednesday Evening', 'Friday Morning'], location: 'Central Plaza', priority: 'High' },
    { name: 'Daniel', requests: ['Tuesday Morning', 'Thursday Morning', 'Friday Evening'], location: 'Business District', priority: 'Medium' },
    { name: 'Jacob', requests: ['Tuesday Night', 'Thursday Night', 'Saturday Night', 'Sunday Night'], location: 'Central Plaza', priority: 'High' },
    { name: 'Kathryn', requests: ['Monday Morning', 'Friday Morning'], location: 'Grand Square', priority: 'Low' },
    { name: 'Courtney', requests: ['Wednesday Evening', 'Saturday Evening'], location: 'Business District', priority: 'Medium' },
    { name: 'April', requests: ['Thursday Evening', 'Friday Evening'], location: 'Central Plaza', priority: 'Low' },
    { name: 'Emma', requests: ['Monday Morning', 'Tuesday Morning', 'Wednesday Morning'], location: 'City Tower', priority: 'High' },
    { name: 'Ruth', requests: ['Monday Morning', 'Thursday Morning'], location: 'Central Plaza', priority: 'Medium' }
  ];

  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  const shifts = [
    { key: 'morning', label: 'Morning', time: '6:00 AM - 2:00 PM', color: 'bg-blue-100 border-blue-300' },
    { key: 'evening', label: 'Evening', time: '2:00 PM - 10:00 PM', color: 'bg-orange-100 border-orange-300' },
    { key: 'night', label: 'Night', time: '10:00 PM - 6:00 AM', color: 'bg-purple-100 border-purple-300' }
  ];

  const getEfficiencyColor = (efficiency) => {
    switch (efficiency) {
      case 'Maximum': return 'bg-green-100 text-green-800';
      case 'High': return 'bg-blue-100 text-blue-800';
      case 'Balanced': return 'bg-yellow-100 text-yellow-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'High': return 'bg-red-100 text-red-800';
      case 'Medium': return 'bg-yellow-100 text-yellow-800';
      case 'Low': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getBudgetIcon = (cost, budget) => {
    if (cost > budget) {
      return <TrendingUp className="text-red-500" size={16} />;
    } else {
      return <TrendingDown className="text-green-500" size={16} />;
    }
  };

  const getBudgetColor = (cost, budget) => {
    if (cost > budget) {
      return 'text-red-600';
    } else {
      return 'text-green-600';
    }
  };

  const getMatchRateColor = (rate) => {
    if (rate >= 90) return 'bg-green-500';
    if (rate >= 80) return 'bg-green-400';
    if (rate >= 70) return 'bg-yellow-500';
    if (rate >= 60) return 'bg-orange-500';
    return 'bg-red-500';
  };

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Link to="/schedule">
            <Button variant="ghost" size="sm">
              <ArrowLeft size={16} className="mr-2" />
              Back to Schedule
            </Button>
          </Link>
          <div>
            <h1 className="text-3xl font-bold">Auto-Schedule Proposal Builder</h1>
            <p className="text-muted-foreground">Select a schedule proposal to publish</p>
          </div>
        </div>
      </div>

      {/* AI Badge */}
      <div className="flex items-center space-x-2 bg-primary/10 rounded-lg p-3 w-fit">
        <Bot size={20} className="text-primary" />
        <span className="text-primary font-medium">Created with Cadenza AI</span>
        <Sparkles size={16} className="text-primary" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Schedule Proposals - Main Area */}
        <div className="lg:col-span-3">
          <div className="space-y-8">
            {scheduleProposals.map((proposal) => (
              <Card 
                key={proposal.id} 
                className={`cursor-pointer transition-all hover:shadow-lg ${
                  selectedOption === proposal.id ? 'ring-2 ring-primary' : ''
                }`}
                onClick={() => setSelectedOption(proposal.id)}
              >
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-xl">{proposal.title}</CardTitle>
                    <div className="flex items-center space-x-2">
                      <Badge className={getEfficiencyColor(proposal.efficiency)}>
                        {proposal.efficiency}
                      </Badge>
                      <span className="text-sm text-muted-foreground">{proposal.coverage} Coverage</span>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  {/* Mini Calendar Schedule */}
                  <div className="space-y-4">
                    {shifts.map((shift) => (
                      <div key={shift.key} className={`p-3 rounded-lg border ${shift.color}`}>
                        <div className="mb-3">
                          <h4 className="font-medium text-sm">{shift.label}</h4>
                          <p className="text-xs text-muted-foreground">{shift.time}</p>
                        </div>
                        
                        <div className="grid grid-cols-7 gap-1">
                          {days.map((day) => (
                            <div key={day} className="space-y-1">
                              <div className="text-center">
                                <p className="font-medium text-xs">{day.slice(0, 3)}</p>
                              </div>
                              
                              <div className="min-h-[60px] bg-white rounded border p-1 space-y-1">
                                {proposal.schedule[day][shift.key].map((person, index) => (
                                  <div key={index} className="bg-primary/20 rounded px-1 py-0.5">
                                    <span className="text-xs font-medium">{person}</span>
                                  </div>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Cost Analysis */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4 border-t">
                    <div className="space-y-2">
                      <div className="text-sm font-medium">Projected Cost</div>
                      <div className="flex items-center space-x-2">
                        <div className="text-2xl font-bold">${proposal.cost.toLocaleString()}</div>
                        {getBudgetIcon(proposal.cost, proposal.budget)}
                      </div>
                      <div className={`text-sm ${getBudgetColor(proposal.cost, proposal.budget)}`}>
                        {proposal.cost > proposal.budget 
                          ? `$${(proposal.cost - proposal.budget).toLocaleString()} over budget`
                          : `$${(proposal.budget - proposal.cost).toLocaleString()} under budget`
                        }
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div className="text-sm font-medium flex items-center space-x-1">
                        <Target size={14} />
                        <span>Match Rate</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="text-2xl font-bold">{proposal.matchRate}%</div>
                        <div className={`w-3 h-3 rounded-full ${getMatchRateColor(proposal.matchRate)}`}></div>
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {proposal.assignedPersonnel}/{proposal.totalPersonnel} got preferred shifts
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div className="text-sm font-medium">Mismatched Assignments</div>
                      <div className="space-y-1">
                        {proposal.mismatchedAssignments.slice(0, 2).map((mismatch, index) => (
                          <div key={index} className="text-xs bg-yellow-50 rounded px-2 py-1">
                            <span className="font-medium">{mismatch.name}:</span> {mismatch.requested} → {mismatch.assigned}
                          </div>
                        ))}
                        {proposal.mismatchedAssignments.length > 2 && (
                          <div className="text-xs text-muted-foreground">
                            +{proposal.mismatchedAssignments.length - 2} more mismatches
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Manual Edit Button */}
                  <div className="flex justify-end pt-2">
                    <Button variant="outline" size="sm">
                      <Edit3 size={14} className="mr-2" />
                      Edit Manually
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Action Button */}
          <div className="mt-6 flex justify-end">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90"
              disabled={!selectedOption}
            >
              <CheckCircle size={20} className="mr-2" />
              Choose & Publish
            </Button>
          </div>
        </div>

        {/* Requested Shifts Panel */}
        <div className="lg:col-span-1">
          <Card className="h-fit">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Users size={20} />
                <span>Requested Shifts</span>
              </CardTitle>
              <p className="text-sm text-muted-foreground">
                Personnel shift requests for upcoming week
              </p>
            </CardHeader>
            <CardContent>
              <div className="space-y-3 max-h-[600px] overflow-y-auto">
                {shiftRequests.map((employee, index) => (
                  <div key={index} className="p-3 bg-muted/30 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center space-x-2">
                        <User size={16} className="text-primary" />
                        <span className="font-medium text-sm">{employee.name}</span>
                      </div>
                      <Badge 
                        variant="outline" 
                        className={`text-xs ${getPriorityColor(employee.priority)}`}
                      >
                        {employee.priority}
                      </Badge>
                    </div>
                    
                    <div className="flex items-center space-x-1 mb-2">
                      <MapPin size={12} className="text-muted-foreground" />
                      <span className="text-xs text-muted-foreground">{employee.location}</span>
                    </div>
                    
                    <div className="space-y-1">
                      <div className="text-xs font-medium text-muted-foreground">
                        Requested Shifts ({employee.requests.length}):
                      </div>
                      {employee.requests.slice(0, 3).map((request, reqIndex) => (
                        <div key={reqIndex} className="text-xs bg-white rounded px-2 py-1 border">
                          {request}
                        </div>
                      ))}
                      {employee.requests.length > 3 && (
                        <div className="text-xs text-muted-foreground">
                          +{employee.requests.length - 3} more shifts
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default AutoSchedule;

