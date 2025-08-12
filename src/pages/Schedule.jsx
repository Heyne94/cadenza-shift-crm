import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  Calendar,
  Clock,
  Users,
  Plus,
  Trash2,
  RefreshCw,
  ChevronLeft,
  ChevronRight,
  Bot,
  User,
  MapPin
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Schedule = () => {
  const [selectedWeek, setSelectedWeek] = useState('April 19 - 25, 2024');
  const [showSwapModal, setShowSwapModal] = useState(false);
  const [selectedShift, setSelectedShift] = useState(null);

  // Mock data for current schedule
  const weeklySchedule = {
    'Monday': {
      morning: ['Neil', 'Mike'],
      evening: [],
      night: []
    },
    'Tuesday': {
      morning: ['Shannon', 'Daniel'],
      evening: ['Mike'],
      night: ['Jacob']
    },
    'Wednesday': {
      morning: ['Neil'],
      evening: ['Shannon', 'Shannon'],
      night: []
    },
    'Thursday': {
      morning: ['Daniel', 'Mike'],
      evening: ['Neil'],
      night: ['Jacob']
    },
    'Friday': {
      morning: ['Shannon'],
      evening: ['Daniel', 'Mike'],
      night: []
    },
    'Saturday': {
      morning: [],
      evening: ['Neil', 'Shannon'],
      night: ['Jacob']
    },
    'Sunday': {
      morning: ['Mike', 'Daniel'],
      evening: [],
      night: ['Jacob']
    }
  };

  // Mock data for available personnel for swapping
  const availablePersonnel = {
    morning: ['Neil', 'Mike', 'Shannon', 'Daniel', 'Kathryn', 'Courtney'],
    evening: ['Shannon', 'Daniel', 'Mike', 'Neil', 'April', 'Courtney'],
    night: ['Jacob', 'Mike', 'Daniel', 'Shannon']
  };

  // Mock data for shift requests from personnel
  const shiftRequests = [
    { name: 'Neil', requests: ['Monday Morning', 'Wednesday Morning', 'Saturday Evening'], location: 'Central Plaza' },
    { name: 'Mike', requests: ['Monday Morning', 'Tuesday Evening', 'Thursday Morning'], location: 'Grand Square' },
    { name: 'Shannon', requests: ['Tuesday Morning', 'Wednesday Evening', 'Friday Morning'], location: 'Central Plaza' },
    { name: 'Daniel', requests: ['Tuesday Morning', 'Thursday Morning', 'Friday Evening'], location: 'Business District' },
    { name: 'Jacob', requests: ['Tuesday Night', 'Thursday Night', 'Saturday Night', 'Sunday Night'], location: 'Central Plaza' },
    { name: 'Kathryn', requests: ['Monday Morning', 'Friday Morning'], location: 'Grand Square' },
    { name: 'Courtney', requests: ['Wednesday Evening', 'Saturday Evening'], location: 'Business District' },
    { name: 'April', requests: ['Thursday Evening', 'Friday Evening'], location: 'Central Plaza' }
  ];

  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  const shifts = [
    { key: 'morning', label: 'Morning Shift', time: '6:00 AM - 2:00 PM', color: 'bg-blue-100 border-blue-300' },
    { key: 'evening', label: 'Evening Shift', time: '2:00 PM - 10:00 PM', color: 'bg-orange-100 border-orange-300' },
    { key: 'night', label: 'Night Shift', time: '10:00 PM - 6:00 AM', color: 'bg-purple-100 border-purple-300' }
  ];

  const handleSwap = (day, shift) => {
    setSelectedShift({ day, shift });
    setShowSwapModal(true);
  };

  const handleAdd = (day, shift) => {
    // Logic to add personnel to shift
    console.log(`Adding personnel to ${day} ${shift}`);
  };

  const handleDelete = (day, shift, person) => {
    // Logic to remove personnel from shift
    console.log(`Removing ${person} from ${day} ${shift}`);
  };

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Schedule Management</h1>
          <p className="text-muted-foreground">Manage weekly shifts and personnel assignments</p>
        </div>
        <div className="flex items-center space-x-3">
          <Link to="/schedule/auto-schedule">
            <Button className="bg-primary hover:bg-primary/90">
              <Bot size={16} className="mr-2" />
              Auto-Schedule
            </Button>
          </Link>
          <Button variant="outline">
            <Calendar size={16} className="mr-2" />
            Export Schedule
          </Button>
        </div>
      </div>

      {/* Week Navigation */}
      <Card>
        <CardContent className="p-4">
          <div className="flex items-center justify-between">
            <Button variant="ghost" size="sm">
              <ChevronLeft size={16} className="mr-1" />
              Previous Week
            </Button>
            <div className="text-center">
              <h3 className="text-lg font-semibold">{selectedWeek}</h3>
              <p className="text-sm text-muted-foreground">Week 16, 2024</p>
            </div>
            <Button variant="ghost" size="sm">
              Next Week
              <ChevronRight size={16} className="ml-1" />
            </Button>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Schedule Calendar - Main Area */}
        <div className="lg:col-span-3">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Calendar size={20} />
                <span>Weekly Schedule</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {shifts.map((shift) => (
                  <div key={shift.key} className={`p-4 rounded-lg border-2 ${shift.color}`}>
                    <div className="mb-4">
                      <h3 className="font-semibold text-lg">{shift.label}</h3>
                      <p className="text-sm text-muted-foreground">{shift.time}</p>
                    </div>
                    
                    <div className="grid grid-cols-7 gap-2">
                      {days.map((day) => (
                        <div key={day} className="space-y-2">
                          <div className="text-center">
                            <p className="font-medium text-sm">{day.slice(0, 3)}</p>
                            <p className="text-xs text-muted-foreground">{19 + days.indexOf(day)}</p>
                          </div>
                          
                          <div className="min-h-[120px] bg-white rounded border p-2 space-y-1">
                            {weeklySchedule[day][shift.key].map((person, index) => (
                              <div key={index} className="flex items-center justify-between bg-primary/10 rounded px-2 py-1">
                                <span className="text-xs font-medium">{person}</span>
                                <Button
                                  variant="ghost"
                                  size="sm"
                                  className="h-4 w-4 p-0 hover:bg-red-100"
                                  onClick={() => handleDelete(day, shift.key, person)}
                                >
                                  <Trash2 size={10} className="text-red-500" />
                                </Button>
                              </div>
                            ))}
                            
                            {/* Action Buttons */}
                            <div className="flex space-x-1 mt-2">
                              <Button
                                variant="ghost"
                                size="sm"
                                className="h-6 w-6 p-0 hover:bg-blue-100"
                                onClick={() => handleAdd(day, shift.key)}
                              >
                                <Plus size={12} className="text-blue-500" />
                              </Button>
                              <Button
                                variant="ghost"
                                size="sm"
                                className="h-6 w-6 p-0 hover:bg-green-100"
                                onClick={() => handleSwap(day, shift.key)}
                              >
                                <RefreshCw size={12} className="text-green-500" />
                              </Button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Shift Requests Panel */}
        <div className="lg:col-span-1">
          <Card className="h-fit">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Users size={20} />
                <span>Shift Requests</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {shiftRequests.map((employee, index) => (
                  <div key={index} className="p-3 bg-muted/30 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center space-x-2">
                        <User size={16} className="text-primary" />
                        <span className="font-medium text-sm">{employee.name}</span>
                      </div>
                      <Badge variant="outline" className="text-xs">
                        {employee.requests.length} requests
                      </Badge>
                    </div>
                    
                    <div className="flex items-center space-x-1 mb-2">
                      <MapPin size={12} className="text-muted-foreground" />
                      <span className="text-xs text-muted-foreground">{employee.location}</span>
                    </div>
                    
                    <div className="space-y-1">
                      {employee.requests.slice(0, 2).map((request, reqIndex) => (
                        <div key={reqIndex} className="text-xs bg-white rounded px-2 py-1">
                          {request}
                        </div>
                      ))}
                      {employee.requests.length > 2 && (
                        <div className="text-xs text-muted-foreground">
                          +{employee.requests.length - 2} more
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

      {/* Swap Modal */}
      {showSwapModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <Card className="w-96">
            <CardHeader>
              <CardTitle>Swap Personnel</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <p className="text-sm text-muted-foreground">
                  Available personnel for {selectedShift?.day} {selectedShift?.shift} shift:
                </p>
                {selectedShift && availablePersonnel[selectedShift.shift].map((person, index) => (
                  <div key={index} className="flex items-center justify-between p-2 border rounded">
                    <span className="text-sm">{person}</span>
                    <Button size="sm" variant="outline">
                      Assign
                    </Button>
                  </div>
                ))}
              </div>
              <div className="flex justify-end space-x-2 mt-4">
                <Button variant="outline" onClick={() => setShowSwapModal(false)}>
                  Cancel
                </Button>
                <Button onClick={() => setShowSwapModal(false)}>
                  Confirm
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
};

export default Schedule;

