import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

interface TabItem {
  label: string
  content: React.ReactNode
}

interface TabBarProps {
  tabs: TabItem[]
  defaultTab?: string
}

export function TabBar({ tabs, defaultTab }: TabBarProps) {
  return (
    <Tabs defaultValue={defaultTab || tabs[0].label} className="w-full">
      <TabsList className="w-full">
        {tabs.map((tab) => (
          <TabsTrigger key={tab.label} value={tab.label} className="flex-1">
            {tab.label}
          </TabsTrigger>
        ))}
      </TabsList>
      {tabs.map((tab) => (
        <TabsContent key={tab.label} value={tab.label}>
          {tab.content}
        </TabsContent>
      ))}
    </Tabs>
  )
}
