import http from "http"
import _app from "./server"

let app = _app
const server = http.createServer(app)

let currentApp = app

server.listen(process.env.PORT || 3000, () => console.log("🚀 started"))

// @ts-ignore
if (module.hot) {
	console.log("✅  Server-side HMR Enabled!")

	// @ts-ignore
	module.hot.accept("./server", () => {
		console.log("🔁  HMR Reloading `./server`...")

		try {
			app = require("./server").default
			server.removeListener("request", currentApp)
			server.on("request", app)
			currentApp = app
		} catch (error) {
			console.error(error)
		}
	})
}
