import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Building2, Clock } from "lucide-react";

interface Interview {
  id: string;
  company: string;
  position: string;
  date: string;
  time: string;
  status: "scheduled" | "completed" | "cancelled";
  round: string;
}

const mockInterviews: Interview[] = [
  {
    id: "1",
    company: "TechCorp Inc.",
    position: "Senior Frontend Developer",
    date: "2024-01-15",
    time: "10:00 AM",
    status: "completed",
    round: "Technical Round",
  },
  {
    id: "2",
    company: "Innovation Labs",
    position: "Full Stack Developer",
    date: "2024-01-20",
    time: "2:00 PM",
    status: "scheduled",
    round: "HR Round",
  },
  {
    id: "3",
    company: "Digital Solutions",
    position: "React Developer",
    date: "2024-01-18",
    time: "11:30 AM",
    status: "completed",
    round: "Final Round",
  },
  {
    id: "4",
    company: "StartupXYZ",
    position: "Lead Developer",
    date: "2024-01-12",
    time: "3:00 PM",
    status: "cancelled",
    round: "Initial Screening",
  },
  {
    id: "5",
    company: "Cloud Systems",
    position: "Frontend Engineer",
    date: "2024-01-25",
    time: "9:00 AM",
    status: "scheduled",
    round: "Technical Round",
  },
];

const getStatusBadge = (status: Interview["status"]) => {
  const variants = {
    scheduled: "bg-info text-info-foreground",
    completed: "bg-success text-success-foreground",
    cancelled: "bg-muted text-muted-foreground",
  };

  const labels = {
    scheduled: "Scheduled",
    completed: "Completed",
    cancelled: "Cancelled",
  };

  return (
    <Badge className={variants[status]} variant="secondary">
      {labels[status]}
    </Badge>
  );
};

const Dashboard = () => {
  const stats = {
    total: mockInterviews.length,
    scheduled: mockInterviews.filter((i) => i.status === "scheduled").length,
    completed: mockInterviews.filter((i) => i.status === "completed").length,
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground mb-2">Interview Dashboard</h1>
        <p className="text-muted-foreground">Track and manage your interview history</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Card className="shadow-medium">
          <CardHeader>
            <CardTitle className="text-lg">Total Interviews</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-4xl font-bold text-primary">{stats.total}</p>
          </CardContent>
        </Card>
        <Card className="shadow-medium">
          <CardHeader>
            <CardTitle className="text-lg">Scheduled</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-4xl font-bold text-info">{stats.scheduled}</p>
          </CardContent>
        </Card>
        <Card className="shadow-medium">
          <CardHeader>
            <CardTitle className="text-lg">Completed</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-4xl font-bold text-success">{stats.completed}</p>
          </CardContent>
        </Card>
      </div>

      <Card className="shadow-medium">
        <CardHeader>
          <CardTitle>Interview History</CardTitle>
          <CardDescription>Your recent and upcoming interviews</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {mockInterviews.map((interview) => (
              <Card key={interview.id} className="shadow-subtle hover:shadow-medium transition-shadow">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="space-y-3 flex-1">
                      <div className="flex items-start justify-between">
                        <div>
                          <h3 className="text-xl font-semibold text-foreground">{interview.position}</h3>
                          <div className="flex items-center gap-2 mt-1">
                            <Building2 className="h-4 w-4 text-muted-foreground" />
                            <p className="text-muted-foreground">{interview.company}</p>
                          </div>
                        </div>
                        {getStatusBadge(interview.status)}
                      </div>
                      <div className="flex flex-wrap gap-4 text-sm">
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <Calendar className="h-4 w-4" />
                          <span>{new Date(interview.date).toLocaleDateString()}</span>
                        </div>
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <Clock className="h-4 w-4" />
                          <span>{interview.time}</span>
                        </div>
                      </div>
                      <Badge variant="outline" className="w-fit">
                        {interview.round}
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Dashboard;
