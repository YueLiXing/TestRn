//
//  RNTextViewViewManager.m
//  TestRn
//
//  Created by 岳立兴 on 2024/2/26.
//

#import <UIKit/UIKit.h>
#import <React-Core/React/RCTUIManager.h>
#import "RNTextViewViewManager.h"
#import "RNTextView.h"

@implementation RNTextViewViewManager

RCT_EXPORT_MODULE(RNTextView)

//- (UIView *)view {
//  return [UILabel alloc]
//}

- (UIView *)view {
  RNTextView *label = [[RNTextView alloc] init];
  return label;
}

- (void)asdasd {
//  [self.bridge.uiManager viewForReactTag:@1];
}


RCT_EXPORT_VIEW_PROPERTY(text, NSString)
RCT_EXPORT_VIEW_PROPERTY(callback, RCTDirectEventBlock)

@end

