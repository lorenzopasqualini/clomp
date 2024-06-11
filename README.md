# <img src="https://github.com/lorenzopasqualini/clomp/assets/63103853/a77002f2-10a9-4b49-8d43-e9092a28ef63" width="20" align=”center”> CLOMP

>This project is down right now due to PlanetScale's free plan being discontinued. I'll eventually migrate the current MySQL database to a serverless Postgres one, possibly NeonDB or Supabase for a BaaS.
>
>I'll get around to it, just not today.

Clomp is an E-Commerce platform built on top of Clomp's Administrator Dashboard ([ClompAd](https://github.com/lorenzopasqualini/clompAd)), in which products can be sold to the end-user on the main storefront; all of this is through the store owner handling the dashboard behind the scenes, which has its own interface.

## Storefront

![image](https://github.com/lorenzopasqualini/clomp/assets/63103853/09ed90e3-15e8-4f19-8963-2bec9a1041f3)

Stripe is integrated as form of payment, shipping and order confirmation. No user sign-in is needed to purchase on the storefront, while Clerk is used in the dashboard to verify store owner admin authentication. The modal, cart and product description are picked up from ShadCN/UI components. Styling is handled entirely by TailwindCSS.

## Admin Dashboard

![image](https://github.com/lorenzopasqualini/clomp/assets/63103853/d1f9f882-7fc5-4678-b086-8ae1705b34a0)

A number of features have been implemented to categorize and filter products, smoothening the **user experience** for both the buyer/seller and thus simplifying the **customer's checkout journey**.

LP.
