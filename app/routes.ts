import { type RouteConfig, index, route } from "@react-router/dev/routes"

export default [
  index("routes/_index.tsx"),
  route("agents", "routes/agents.tsx"),
  route("agents/new", "routes/agents.new.tsx"),
  route("agents/:id", "routes/agents.$id.tsx"),
  route("agents/:id/workflow", "routes/agents.$id.workflow.tsx")
] satisfies RouteConfig
