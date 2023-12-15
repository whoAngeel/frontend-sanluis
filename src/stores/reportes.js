import axios from "axios";
import { defineStore, acceptHMRUpdate } from "pinia";
import { ref } from "vue";
import { useToast } from "vue-toastification";

export const useReportesStore = defineStore("reportes", () => {
	let reportes = ref([]);
	let reportesToday = ref([]);
	let ticketInfo = ref({});
	const toast = useToast();
	const token = $cookies.get("user")?.token;
	const today = new Date();

	const fetchReportes = () => {
		// console.log("Mes: " + today.getMonth());
		axios
			.request({
				headers: {
					Authorization: `Bearer ${token}`,
				},
				method: "POST",
				url: `/api/reports/month`,
				data: {
					year: `${today.getFullYear()}`,
					month: `${today.getMonth() + 1}`,
				},
			})
			.then((res) => {
				reportes.value = res.data;
			})
			.catch((err) => {
				toast.error("Error al cargar los reportes del mes");
				console.log(err);
			});
	};

	const fetchReportesDay = () => {
		axios
			.request({
				headers: {
					Authorization: `Bearer ${token}`,
				},
				method: "POST",
				url: `/api/reports/day`,
				data: {
					year: `${today.getFullYear()}`,
					month: `${today.getMonth() + 1}`,
					day: `${today.getDate()}`,
				},
			})
			.then((res) => {
				reportesToday.value = res.data;
			})
			.catch((err) => {
				toast.error("Error al cargar los reportes de hoy");
				console.log(err);
			});
	};

	const getTicketInfo = (id) => {
		axios
			.request({
				headers: {
					Authorization: `Bearer ${token}`,
				},
				method: "GET",
				url: `/api/sales/${id}`,
			})
			.then((res) => {
				console.log(res.data);
				ticketInfo.value = res.data;
			})
			.catch((err) => {
				console.log(err);
				toast.error(`No se encontró la venta con ID "${id}"`);
			});
	};
	return {
		reportes,
		reportesToday,
		fetchReportes,
		fetchReportesDay,
		getTicketInfo,
		ticketInfo,
	};
});

if (import.meta.hot) {
	import.meta.hot.accept(acceptHMRUpdate(useReportesStore, import.meta.hot));
}
