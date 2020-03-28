import { useMemo, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

import { closeAppMenuAction, openAppMenuAction, IStoreState } from "store";

export const useApp = () => {
  const dispatch = useDispatch();

  const { isMenuOpen } = useSelector((state: IStoreState) => state.app);

  /** Ouvre le menu de l'application */
  const openAppMenu = useCallback(() => {
    dispatch(openAppMenuAction());
  }, [dispatch]);

  /** Ferme le menu de l'application */
  const closeAppMenu = useCallback(() => {
    dispatch(closeAppMenuAction());
  }, [dispatch]);

  return useMemo(() => ({ isMenuOpen, openAppMenu, closeAppMenu }), [
    isMenuOpen,
    closeAppMenu,
    openAppMenu
  ]);
};
