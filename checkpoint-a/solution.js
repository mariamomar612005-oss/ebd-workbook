// Checkpoint A — your work goes in this file.
//
// Read checkpoint-a/spec.md. It was written for your GitHub account and it is
// the only description of the task that matters.
//
// Check your work with:  npm test a

import { findAllOrders, findOrderById } from "./orders-db.js";

// TODO: export the five functions spec.md asks for:
//   loadOrders()        async
export async function loadOrders() {
  return await findAllOrders();
}
//   myOrders(orders)
export function myOrders(orders) {
  return orders.filter(order => order.city === "Alexandria" && order.status === "pending");
}
//   summarize(orders)
export function summarize(orders) {
  return orders.reduce((total, order) => total + order.quantity, 0);
}
//   describeOrder(id)   async, and must never throw
export async function describeOrder(id) {
  try {
    const order = await findOrderById(id);
    return `${order.student} ordered ${order.quantity} x ${order.item}`;
  } catch {
    return `Missing order: ${id}`;
  }
}
//   toJsonLines(orders)
export function toJsonLines(orders) {
  return JSON.stringify(
    orders.map(order => ({
      student: order.student,
      item: order.item
    }))
  );
}
//
// Nothing is started for you this time. Everything you need is in modules
// 00 to 08.
