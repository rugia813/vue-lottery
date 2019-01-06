---
inject: true
to: src/store/types.ts
after: import
---
import { <%= name %>State } from "@/store/modules/<%= name %>/types";