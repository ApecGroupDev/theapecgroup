import { NextResponse } from "next/server";

export async function GET() {
  const content = `# The APEC Group Services

The APEC Group provides end-to-end petroleum services for the B2B sector. We eliminate the need for our clients to manage multiple contractors by providing all required services in-house.

## Core Services

### 1. Gas Station Construction
- Ground-up construction of new fueling stations.
- Complete facility remodeling and modernizations.
- Canopy installation and concrete pouring.
- Underground and above-ground storage tank (UST/AST) installations.

### 2. Environmental Compliance
- EPA and state-mandated compliance inspections.
- Underground tank tightness testing.
- Line and leak detector testing.
- Vapor recovery system testing and maintenance.
- Overfill protection and spill bucket evaluations.

### 3. Service & Maintenance
- 24/7 Emergency dispatch for critical system failures.
- Dispenser and pump calibration/repair.
- Point-of-Sale (POS) and network troubleshooting.
- Filter changes and preventative maintenance schedules.

### 4. Fuel Solutions
- Reliable bulk fuel delivery scheduling.
- Emergency fuel drops.
- Fuel quality management and filtration services.

Our comprehensive service portfolio ensures that convenience stores and commercial fueling sites remain fully operational, compliant, and safe.
`;

  return new NextResponse(content, {
    status: 200,
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
}
