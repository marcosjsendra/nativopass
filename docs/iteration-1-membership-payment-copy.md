# Iteration 1 — Membership Payment

## Purpose

This screen helps a signed-out NativoPass user understand the value of Miembros+, choose a billing period, and continue to the membership payment action.

It appears after the user selects **UNIRME** from the Iteration 1 homepage membership CTA.

## Recommended screen copy

### Navigation

- Back button accessible label: **VOLVER**
- Brand: NativoPass logo

### Main message

#### Title

**DISFRUTÁ MÁS. PAGÁ MENOS.**

#### Supporting copy

Hacete Miembro+ y desbloqueá beneficios exclusivos durante todo el año.

### Member benefits

#### Descuentos en comercios aliados

Ahorrá en todos los comercios aliados de NativoPass.

#### Enterate antes que nadie

Recibí primero las notificaciones de nuevos descuentos y promociones.

#### Jugá y ganá

Participá en Nativo Rewards y ganá beneficios y premios semanales o mensuales.

#### Acceso anticipado

Conocé antes los nuevos productos y lanzamientos de nuestros aliados.

#### Closing benefit line

Y disfrutá muchas experiencias exclusivas más.

## Plan selection

### Introductory label

**ELEGÍ TU PLAN**

Seleccioná la opción que mejor se adapte a vos.

### Annual plan — recommended and selected by default

- Plan name: **ANUAL**
- Savings badge: **AHORRÁ 30%**
- Price: **₡42.000 / AÑO**
- Equivalent price: **₡3.500 / MES**
- Supporting calculation: ₡5.000 × 12 meses = ₡60.000; con 30% de descuento = ₡42.000 al año.

### Monthly plan

- Plan name: **MENSUAL**
- Price: **₡5.000 / MES**

## Actions

The primary button label changes with the selected plan.

### Annual plan selected

**PAGAR ₡42.000 AL AÑO**

### Monthly plan selected

**PAGAR ₡5.000 AL MES**

### Secondary action

**CANCELAR**

Accessible label: **Cancelar y volver al inicio**

## Interaction states

### Processing

**PROCESANDO…**

### Payment error

**NO PUDIMOS COMPLETAR EL PAGO**

Revisá la información e intentá de nuevo.

Action: **INTENTAR DE NUEVO**

## Iteration 1 flow

1. The signed-out homepage displays **DESBLOQUEÁ MIEMBROS+**.
2. Selecting **UNIRME** opens the Membership Payment screen.
3. The annual plan is selected by default and highlights the 30% savings.
4. The user can switch between the annual and monthly plans.
5. Selecting the primary payment button completes the prototype payment state and returns to the Iteration 1 homepage.
6. The homepage then displays **SOS MIEMBRO+**, the points balance, remaining participation days, and **VER RANKING**.
7. Selecting **CANCELAR** or the back control returns to the signed-out homepage without changing membership state.

## Layout direction for implementation

- Use a simple, direct, single-screen hierarchy inspired by the supplied Flow pricing reference without copying its branding.
- Keep the NativoPass logo visible near the top.
- Prioritize the title, concise benefit list, two plan selectors, primary payment action, and cancel action.
- Target a complete no-scroll composition on device heights of 500px or greater by adjusting spacing and typography within readable limits.
- Allow vertical scrolling below 500px rather than compressing text or touch targets beyond usability.
- Preserve visible keyboard focus, semantic plan selection controls, and touch-friendly actions.
- Do not show the homepage bottom navigation on the payment screen.

## Alternative title options

If the recommended title is not selected, these remain viable:

1. **DESBLOQUEÁ MÁS CON MIEMBROS+**
2. **MÁS BENEFICIOS. MÁS NATIVO.**

## Decisions to confirm before implementation

1. Confirm **DISFRUTÁ MÁS. PAGÁ MENOS.** as the final title, or select an alternative.
2. Confirm that the annual plan should be selected by default.
3. Confirm whether the prototype should show the processing state briefly before returning to the member homepage, or transition immediately.
