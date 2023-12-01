<template>
    <div class="overflow-x-auto">
        <table class="table table-xs">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Nombre</th>
                    <th>Precio de venta</th>
                    <th>Precio de compra</th>
                    <th>Stock</th>
                    <th>Marca</th>
                    <th>Proveedor</th>
                    <th>Categoria</th>
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="product in products" :key="product.id" class="font-semibold">
                    <th>{{ product.id }}</th>
                    <td>{{ product.name }}</td>
                    <td>${{ product.salePrice }}</td>
                    <td>${{ product.purchasePrice }}</td>
                    <td>{{ product.stock }}</td>
                    <td>{{ product.brand }}</td>
                    <td>{{ product.provider.name }}</td>
                    <td>{{ product.category.name }}</td>
                    <th>
                        <button class="btn btn-xs bg-rose-500 text-white">
                            Eliminar
                        </button>
                        <button class="btn btn-xs bg-sky-500 text-white">
                            Editar
                        </button>
                    </th>
                </tr>
            </tbody>
            <tfoot>
                <tr>
                    <th>ID</th>
                    <th>Nombre</th>
                    <th>Precio de venta</th>
                    <th>Stock</th>
                    <th>Marca</th>
                    <th>Proveedor</th>
                    <th>Categoria</th>
                </tr>
            </tfoot>
        </table>
    </div>
</template>

<script setup>
const props = defineProps(['products'])
</script>
