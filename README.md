# Coding Assignment

Your mission, should you choose to accept it, is to build a sample homeowner lead generation web form.

The instructions below encapsulate all the expectations regarding the project. Everything that isn’t explicitly specified is up to you to decide; use your best judgement.

Of course, should you have any questions you may contact your sponsor. Good luck!

---

### The flow of the form is as follows:

1. The user enters her name (`first` and `last`), `email` address and `phone` number.
2. `Email` and `phone` are checked for validity. If invalid, display a suitable error message and don’t proceed until fixed.
3. Next, the user enters her home `address`. Home addresses should be autocompleted using the `Google Maps API`. If that `address` cannot be located, display a suitable error message and don’t proceed until fixed.
4. Using the [Zillow API](https://www.zillow.com/howto/api/APIOverview.htm), display the Rent Zestimate valuation range for the home, to give the homeowner an idea of expected `monthly rent`. If no Rent Zestimate is available, calculate the `annual rent` as 5% of the home price Zestimate. Display the `monthly range` as ±10%. If that `address` cannot be located, display a suitable error message and don’t proceed until fixed.
5. The user can enter her expected `monthly rent`, which may differ from the suggested values.
6. Send an `email` to the user congratulating her for signing up, using an API or service of your choosing. Include in the email the user’s `IP address` and all the details that we collected (`name`, `phone`, `email`, `address`, `range` and `expected rent`).
7. Lastly, we store all the above information in `local storage`, and display it in the user’s future visits to the site. See below for display information.

---

### Form Layout
Where:
1 = `Instructions`
2 = `History`, a list of all previous searches & results
3 = `Data` collation
4 = `Progress` bar, advancing with the steps of the process.

Desktop:
```
| 1 | | 2 |
| 3 | | 4 |
```
Mobile:
```
| 4 |
| 3 |
| 2 |
| 1 |
```