import { ImageResponse } from "@vercel/og";

export const runtime = "edge";
export const alt = "Arnav Kumar, Generalist Founding Operator";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
	return new ImageResponse(
		(
			<div
				style={{
					height: "100%",
					width: "100%",
					display: "flex",
					flexDirection: "column",
					alignItems: "flex-start",
					justifyContent: "space-between",
					backgroundColor: "#000000",
					backgroundImage:
						"radial-gradient(circle at 20% 20%, rgba(63, 63, 70, 0.4) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(63, 63, 70, 0.3) 0%, transparent 50%)",
					padding: "80px",
					color: "#fafafa",
					fontFamily: "Inter, system-ui, sans-serif",
				}}
			>
				<div
					style={{
						display: "flex",
						flexDirection: "column",
						gap: "16px",
					}}
				>
					<div
						style={{
							fontSize: "20px",
							color: "#a1a1aa",
							letterSpacing: "0.15em",
							textTransform: "uppercase",
						}}
					>
						arnav.kumar
					</div>
					<div
						style={{
							fontSize: "112px",
							fontWeight: 900,
							lineHeight: 1,
							letterSpacing: "-0.03em",
						}}
					>
						Arnav Kumar
					</div>
				</div>
				<div
					style={{
						display: "flex",
						flexDirection: "column",
						gap: "20px",
					}}
				>
					<div
						style={{
							fontSize: "44px",
							fontWeight: 600,
							color: "#fafafa",
							lineHeight: 1.2,
							letterSpacing: "-0.02em",
						}}
					>
						Generalist Founding Operator
					</div>
					<div
						style={{
							fontSize: "26px",
							color: "#a1a1aa",
							lineHeight: 1.4,
							maxWidth: "900px",
						}}
					>
						Engineer + growth + ops in one. Currently running a one-principal
						art business from Mumbai while the founder is in Dubai.
					</div>
				</div>
			</div>
		),
		{
			...size,
		},
	);
}
