import BaseLayout from "app/layouts/BaseLayout";

export function getLayoutComponent(Component: any) {
  if (Component.Layout) {
    return Component.Layout;
  }

  if (Component.getLayout) {
    return Component.getLayout;
  }

  if (Component.Layout === false) {
    return ({ children }: { children: React.ReactNode }) => children;
  }

  return BaseLayout;
}
