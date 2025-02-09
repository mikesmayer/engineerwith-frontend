"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts"

const projectComplexities = [
  { value: "simple", label: "Simple (MVP, single-feature products)" },
  { value: "moderate", label: "Moderate (multi-feature applications)" },
  { value: "complex", label: "Complex (enterprise systems)" },
]

const aiIntegrationLevels = [
  { value: "basic", label: "Basic: AI-trained engineers only" },
  { value: "standard", label: "Standard: AI-trained engineers + AI tools" },
  { value: "complete", label: "Complete: Full AI transformation including team training" },
]

export function ROICalculator() {
  const [currentState, setCurrentState] = useState({
    engineerCount: 10,
    avgMonthlyCost: 15000,
    avgProjectTime: 6,
    projectsPerYear: 4,
  })
  const [projectComplexity, setProjectComplexity] = useState("moderate")
  const [aiIntegration, setAiIntegration] = useState("standard")

  const calculateROI = () => {
    // These are simplified calculations and should be adjusted based on real data and more complex logic
    const currentAnnualCost = currentState.engineerCount * currentState.avgMonthlyCost * 12
    const aiEngineerCost = 6000 // Base rate for AI-trained engineer
    const aiToolFee = aiIntegration === "basic" ? 0 : aiIntegration === "standard" ? 1000 : 2000
    const projectedAnnualCost = currentState.engineerCount * (aiEngineerCost + aiToolFee) * 12

    const costSavings = currentAnnualCost - projectedAnnualCost
    const costReductionPercentage = (costSavings / currentAnnualCost) * 100

    const timeReductionFactor = projectComplexity === "simple" ? 5 : projectComplexity === "moderate" ? 4 : 3
    const projectedProjectTime = currentState.avgProjectTime / timeReductionFactor
    const timeSaved = currentState.avgProjectTime - projectedProjectTime
    const additionalProjects = Math.floor(
      (currentState.projectsPerYear * currentState.avgProjectTime) / projectedProjectTime -
        currentState.projectsPerYear,
    )

    const productivityIncrease = 30 // Assuming a 30% productivity increase, adjust as needed

    return {
      costSavings,
      costReductionPercentage,
      timeSaved,
      additionalProjects,
      productivityIncrease,
      currentAnnualCost,
      projectedAnnualCost,
      currentProjectTime: currentState.avgProjectTime,
      projectedProjectTime,
    }
  }

  const results = calculateROI()

  const chartData = [
    { name: "Current", cost: results.currentAnnualCost / 1000000, time: results.currentProjectTime },
    { name: "Projected", cost: results.projectedAnnualCost / 1000000, time: results.projectedProjectTime },
  ]

  return (
    <div className="space-y-8">
      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Current State Assessment</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="engineerCount">Number of current engineers</Label>
              <Input
                id="engineerCount"
                type="number"
                value={currentState.engineerCount}
                onChange={(e) => setCurrentState({ ...currentState, engineerCount: Number(e.target.value) })}
              />
            </div>
            <div>
              <Label htmlFor="avgMonthlyCost">Average monthly cost per engineer ($)</Label>
              <Input
                id="avgMonthlyCost"
                type="number"
                value={currentState.avgMonthlyCost}
                onChange={(e) => setCurrentState({ ...currentState, avgMonthlyCost: Number(e.target.value) })}
              />
            </div>
            <div>
              <Label htmlFor="avgProjectTime">Average project completion time (months)</Label>
              <Input
                id="avgProjectTime"
                type="number"
                value={currentState.avgProjectTime}
                onChange={(e) => setCurrentState({ ...currentState, avgProjectTime: Number(e.target.value) })}
              />
            </div>
            <div>
              <Label htmlFor="projectsPerYear">Number of projects completed per year</Label>
              <Input
                id="projectsPerYear"
                type="number"
                value={currentState.projectsPerYear}
                onChange={(e) => setCurrentState({ ...currentState, projectsPerYear: Number(e.target.value) })}
              />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Project Details</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="projectComplexity">Project Complexity</Label>
              <Select value={projectComplexity} onValueChange={setProjectComplexity}>
                <SelectTrigger id="projectComplexity">
                  <SelectValue placeholder="Select project complexity" />
                </SelectTrigger>
                <SelectContent>
                  {projectComplexities.map((complexity) => (
                    <SelectItem key={complexity.value} value={complexity.value}>
                      {complexity.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="aiIntegration">AI Integration Level</Label>
              <Select value={aiIntegration} onValueChange={setAiIntegration}>
                <SelectTrigger id="aiIntegration">
                  <SelectValue placeholder="Select AI integration level" />
                </SelectTrigger>
                <SelectContent>
                  {aiIntegrationLevels.map((level) => (
                    <SelectItem key={level.value} value={level.value}>
                      {level.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>ROI Results</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6 md:grid-cols-3">
            <div>
              <h3 className="text-lg font-semibold mb-2">Cost Savings</h3>
              <p className="text-3xl font-bold text-green-600">${results.costSavings.toLocaleString()}</p>
              <p className="text-sm text-muted-foreground">Annual savings</p>
              <p className="text-lg font-semibold mt-2">{results.costReductionPercentage.toFixed(2)}%</p>
              <p className="text-sm text-muted-foreground">Cost reduction</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Time Savings</h3>
              <p className="text-3xl font-bold text-blue-600">{results.timeSaved.toFixed(1)} months</p>
              <p className="text-sm text-muted-foreground">Per project</p>
              <p className="text-lg font-semibold mt-2">+{results.additionalProjects}</p>
              <p className="text-sm text-muted-foreground">Additional projects per year</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Productivity Gain</h3>
              <p className="text-3xl font-bold text-purple-600">{results.productivityIncrease}%</p>
              <p className="text-sm text-muted-foreground">Team productivity increase</p>
            </div>
          </div>

          <div className="mt-8">
            <h3 className="text-lg font-semibold mb-4">Comparison Chart</h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis yAxisId="left" orientation="left" stroke="#8884d8" />
                <YAxis yAxisId="right" orientation="right" stroke="#82ca9d" />
                <Tooltip />
                <Legend />
                <Bar yAxisId="left" dataKey="cost" name="Annual Cost (Millions $)" fill="#8884d8" />
                <Bar yAxisId="right" dataKey="time" name="Project Time (Months)" fill="#82ca9d" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      <div className="flex justify-center space-x-4">
        <Button>Schedule a Consultation</Button>
        <Button variant="outline">Download Detailed Report</Button>
      </div>
    </div>
  )
}

