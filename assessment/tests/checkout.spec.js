const { test, expect } = require('@playwright/test');
const cart = require('../Pages/checkout');

test.use({ storageState: 'assessment.json' });
test.describe("checkout tests", () => {

  //adds an item to the cart and tests if it was done properly by going to cart page
  test('successfully add item to cart', async ({ page }) => {
    const text = await cart.addItemToCart(page);
    expect(text).toBe('SKU : demo_2');
  });

  //from cart page, go to the next step of delivery address page
  test('successfully go to address page', async ({ page }) => {
    const text = await cart.deliveryAddress(page);
    expect(text).toBe('YOUR DELIVERY ADDRESS');
  });

  //from delivery address page, go to type of shipping page
  test('successfully go to shipping page', async ({ page }) => {
    const text = await cart.shippingType(page);
    expect(text).toContain('Choose a shipping option for this address:');
  });

  //from type of shipping page, go to payment method page
  test('successfully go to payment page', async ({ page }) => {
    const text = await cart.paymentType(page);
    expect(text).toContain('$');
  });

  //from payment method page, go to order summary page
  test('successfully go to order summary page', async ({ page }) => {
    const text = await cart.confirmOrder(page);
    expect(text).toBe('BANK-WIRE PAYMENT.');
  });

  //from order summary page, place order and check if order was successfully placed
  test('successfully place order', async ({ page }) => {
    const text = await cart.orderPlaced(page);
    expect(text).toBe('Your order on My Store is complete.');
  });

})
