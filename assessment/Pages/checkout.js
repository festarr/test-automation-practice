async function addItemToCart (page) {
    
    await page.goto('/index.php?id_product=2&controller=product');
    await page.click('button:has-text("Add to cart")');
    await page.click('text=Proceed to checkout');
    const text = await page.innerText('.cart_ref');
    return text;
}

async function deliveryAddress (page) {
    
    await page.goto('/index.php?controller=order&step=1');
    const text = await page.innerText('.address_title');;
    return text;
}

async function shippingType (page) {

    await deliveryAddress(page);
    await page.click('button:has-text("Proceed to checkout")');
    const text = await page.innerText('.carrier_title')
    return text;
}

async function paymentType (page) {

    await shippingType(page);
    await page.check('input[name="cgv"]');
    await page.click('button:has-text("Proceed to checkout")');
    const text = await page.innerText('#total_price');
    return text
}

async function confirmOrder (page) {

    await paymentType(page);
    await page.goto('/index.php?fc=module&module=bankwire&controller=payment');
    const text = await page.innerText('h3:has-text("Bank-wire payment.")');
    return text
}

async function orderPlaced (page) {

    await confirmOrder(page);
    await page.click('button:has-text("I confirm my order")');
    const text = await page.innerText('text=Your order on My Store is complete.');
    return text
}

module.exports = {
    addItemToCart,
    deliveryAddress,
    shippingType,
    paymentType,
    confirmOrder,
    orderPlaced,
}