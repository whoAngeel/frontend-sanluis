import Home from '../views/HomeView.vue'
import Login from '../views/LoginView.vue'
import EmpleadosView from '../views/modulos/Empleados.vue'
import ProductosView from '../views/modulos/Productos.vue'

import { createWebHistory, createRouter } from "vue-router";

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
        children: [
            {
                path: 'empleados',
                name: "Empleados",
                component: EmpleadosView
            }, {
                path: 'productos',
                name: "Productos",
                component: ProductosView
            }, {
                path: 'punto-venta',
                name: "PuntoDeVenta",
                component: () => import('../views/modulos/PuntoVenta.vue')
            }
        ]
    }, {
        path: '/login',
        name: 'login',
        component: Login,
    }
]
const router = createRouter({
    history: createWebHistory(),
    routes,
});
export { router };
