import { TreeModel } from 'ng2-tree';
import { Image } from './Image';

export interface FolderTree {
  path: string;
  name: string;
  size: number;
  type: 'directory' | 'file';
  extension?: string;
  children?: FolderTree[];
}

export function folderTreeToTreeModel(tree: FolderTree, selected_types: 'directory' | 'file' | 'all'): TreeModel {
  let res_tree: TreeModel = {
    value: tree.name,
    path: tree.path
  };
  if (tree.children) {
    res_tree.children = [];
    tree.children.forEach((value: FolderTree) => {
      if (selected_types != 'all' && selected_types != value.type) {
        return;
      }
      res_tree.children.push(folderTreeToTreeModel(value, selected_types));
    });
  }
  return res_tree;
}

export function folderTreeToImage(tree: FolderTree): Image[] {
  let res: Image[] = [];
  if (tree.children) {
    tree.children.forEach((value: FolderTree) => {
      res.push({
        name: value.name,
        path: value.path
      });
    });
  }
  return res;
}
