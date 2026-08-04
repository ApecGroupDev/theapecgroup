import { NextResponse } from "next/server";

export async function GET() {
  const content = `# About The APEC Group

The APEC Group is a one-stop-shop for all petroleum needs — fuels, tanks, pumps, compliance, and emergency services.

## Our Mission
To provide seamless, start-to-finish petroleum services for convenience stores, commercial fueling operations, and industrial sites across the southern United States. By acting as a single point of contact and primary contractor, we remove the complexity of managing multiple vendors.

## Leadership & Experience
Our team consists of industry veterans with decades of combined experience in fuel system engineering, regulatory compliance, and heavy construction. We pride ourselves on rapid response times and doing the job right the first time.

## Core Values
- **Team**: Teamwork is at the heart of great achievement.
- **Execution**: We build our reputation on what we do, not what we are going to do.
- **Experience**: Leveraging our deep industry experience to solve complex problems.
- **Service**: Honoring the customer through exceptional service.

## Service Areas
We are headquartered in Atlanta, GA, and operate a major branch in Houston, TX. Our teams are equipped to dispatch across the region to ensure our clients' fuel networks remain operational 24/7.
`;

  return new NextResponse(content, {
    status: 200,
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
}
